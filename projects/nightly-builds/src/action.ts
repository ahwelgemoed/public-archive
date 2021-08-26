import simpleGit from "simple-git";
import * as fs from "fs";
import fse from "fs-extra";
import * as path from "path";
import { getOctokit } from "@actions/github";
import { PROJECT_PATH, baseDir } from "./constants";
import { exec } from "@actions/exec";
import { getInput, error } from "@actions/core";

const packagesToPublish = [
  {
    projectPath: "piw-native-utils-internal",
    newName: "@ahwelgemoed/nightly-piw-native-utility",
    newPath: "nightly-piw-native-utility",
  },
  {
    projectPath: "piw-utils-internal",
    newName: "@ahwelgemoed/nightly-piw-utility",
    newPath: "nightly-piw-utility",
  },
];

const PROJECT_TO_CLONE = "https://github.com/mendix/widgets-resources";
const FOLDER_TO_CLONE_INTO = "widgets-resources";
const PROJECT_FOLDER_PATH = `${PROJECT_PATH}/${FOLDER_TO_CLONE_INTO}`;
const git = simpleGit({ baseDir });
const date = new Date();
const time = date.getTime();

const GITHUB_TOKEN = getInput("GITHUB_TOKEN");
getInput("NPM_AUTH_TOKEN");
const github = getOctokit(process.env.GITHUB_TOKEN || GITHUB_TOKEN);

async function run() {
  //  Clone repo
  await git.clone(PROJECT_TO_CLONE, PROJECT_FOLDER_PATH, ["--depth", "1"]);

  // Install Project Dep
  await exec("npm", ["install"], {
    cwd: PROJECT_FOLDER_PATH,
  });
  // Insure Post Install Happens
  await exec("npm", ["run", "postinstall"], {
    cwd: PROJECT_FOLDER_PATH,
  });
  for (const packageToPublish of packagesToPublish) {
    const parsedPackageJson = await _readPackageJSON(
      `${PROJECT_FOLDER_PATH}/packages/tools/${packageToPublish.projectPath}/package.json`
    );
    const newPackage = {
      ...parsedPackageJson,
      version: `1.0.${time}`,
      private: false,
      name: packageToPublish.newName,
      description: `Nightly Build of ${packageToPublish.projectPath}`,
      files: ["dist/**/*"],
      scripts: {
        ...parsedPackageJson.scripts,
        prepare: "",
      },
      publishConfig: {
        registry: "https://registry.npmjs.org",
        access: "public",
      },
      repository: {
        type: "git",
        url: "git://github.com/ahwelgemoed/nightly-builds.git",
        directory: "packages/nightly-piw-utils",
      },
    };
    // Write New JSON
    await _writePackageJSON(
      `${PROJECT_FOLDER_PATH}/packages/tools/${packageToPublish.projectPath}/package.json`,
      newPackage
    );
    // Build Project
    await exec("npm", ["run", "build"], {
      cwd: `${PROJECT_FOLDER_PATH}/packages/tools/${packageToPublish.projectPath}`,
    });
    //Copy Project With Build to Packages
    await copyDir(
      `${PROJECT_FOLDER_PATH}/packages/tools/${packageToPublish.projectPath}`,
      `${PROJECT_PATH}/packages/${packageToPublish.newPath}`
    );
    // SetUp NPM
    await exec("npm config set scope @ahwelgemoed", [], {});
    await exec("npm config list", [], {});
    //  Loop over NPM and GH Settings
    for (const paths of [
      `//registry.npmjs.org/:_authToken=${process.env.NPM_AUTH_TOKEN}`,
      `@ahwelgemoed:registry=https://npm.pkg.github.com/
        //npm.pkg.github.com/:_authToken=${process.env.GITHUB_TOKEN}`,
    ]) {
      try {
        await fs.writeFileSync(
          `${PROJECT_PATH}/packages/${packageToPublish.newPath}/.npmrc`,
          paths
        );
        await exec("npm", ["publish", "--access public"], {
          cwd: `${PROJECT_PATH}/packages/${packageToPublish.newPath}`,
        });
      } catch (error) {
        console.log(`error`, error);
      }
    }
    // Not really necessary - Delays Next build by 5 Sec
    await new Promise((resolve) => setTimeout(resolve, 5000));
  }
}

run();

export async function _readPackageJSON(jsonPath) {
  const rawPackageJSON = await fs.readFileSync(path.resolve(jsonPath), "utf8");
  const parsedPackageJSON = JSON.parse(rawPackageJSON);
  return parsedPackageJSON;
}

export async function _writePackageJSON(jsonPath, newPackage) {
  const stringIfy = JSON.stringify(newPackage);
  try {
    await fs.writeFileSync(jsonPath, stringIfy);
    return;
  } catch (error) {
    error(`Error @ _writePackageJSON ${error}`);
  }
}
export async function copyDir(oldPath, newPath) {
  try {
    fse.copySync(oldPath, newPath, { overwrite: true }, function (err) {
      if (err) {
        console.error(err);
        error(`Error @ copyDir ${err}`);
      } else {
        console.log("success!");
      }
    });
  } catch (error) {
    error(`Error @ copyDir ${error}`);
  }
}
