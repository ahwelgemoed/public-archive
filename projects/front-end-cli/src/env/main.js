const { writeFile } = require("fs").promises;
const inquirer = require("inquirer");
const stringify = require("dotenv-stringify");
const { envConfigs } = require("../configs/env");

const mainEnvProcess = async () => {
  const { env } = await inquirer.prompt([
    {
      type: "list",
      message: "What type Of ENV do you want",
      name: "env",
      choices: Object.keys(envConfigs),
    },
  ]);
  const userSelected = envConfigs[env];
  const stringifyObj = stringify(userSelected);
  await writeFile(".env", stringifyObj);
  console.log(`
      ---------
      ✅ .env Generated - Remember to set the Path to Windows
      🚀 #GO_MAKE_IT
      ---------
      `);
};

module.exports = {
  mainEnvProcess,
};
