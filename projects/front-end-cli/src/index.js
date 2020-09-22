#!/usr/bin/env node
const { writeFile } = require("fs").promises;
const inquirer = require("inquirer");
const argv = require("yargs").argv;
const stringify = require("dotenv-stringify");
const { envConfigs } = require("./configs/env");
const ora = require("ora");

// Android
const {
  witchSimulatorIsInstalled,
  checkIfBootHasCompleted,
  listAllAppsOnDevice,
  installMendixApp,
  startupSimulator,
  openMendixApp,
} = require("./android/android");

// IOS
const {
  openLastUsedDevice,
  getIdOfOpenDevice,
  installMendixAppOnIos,
  TIME_TO_WAIT_FOR_SIM_BOOT,
} = require("./ios/ios");

// Very Anonymous Function Invoking itself
(async () => {
  if (argv.ios) {
    const spinner = ora("Starting Up Device").start();
    const waitingForStartup = ora("Working Some Magic");
    const getIdOfApp = ora("Getting ID");

    const lastDevice = await openLastUsedDevice({ spinner });
    if (lastDevice.status == 0) {
      spinner.succeed(`Device Booted`);
      waitingForStartup.start();
      setTimeout(async () => {
        waitingForStartup.stop();
        const idOfOpenDevice = await getIdOfOpenDevice({ getIdOfApp });
        if (idOfOpenDevice) {
          getIdOfApp.succeed(`Booted Device ID`);
          await installMendixAppOnIos({ idOfOpenDevice });
        }
      }, TIME_TO_WAIT_FOR_SIM_BOOT);
    }
  }
  if (argv.android) {
    const listOfDevices = await witchSimulatorIsInstalled();
    const rationalList = listOfDevices.split("\n").filter(Boolean);
    // TODO PROMPT USER TO SELECT EMULATOR
    let selectedDevice;
    if (rationalList.length <= 1) {
      selectedDevice = listOfDevices;
    } else {
      const { witchSimulatorToStart } = await inquirer.prompt([
        {
          type: "list",
          message: "What Simulator To Start",
          name: "witchSimulatorToStart",
          choices: rationalList,
        },
      ]);
      selectedDevice = witchSimulatorToStart;
    }
    const spinner = ora("Starting Up Device").start();
    const afterBootSpinner = ora("Installing Mendix App");
    const openMendixAppSpinner = ora("Opening App");

    await startupSimulator({ selectedDevice, spinner });
    spinner.text = `Starting Device`;
    let resultsStatus = 1;

    do {
      const { status } = await checkIfBootHasCompleted();
      resultsStatus = status;
    } while (resultsStatus == 1);
    if (resultsStatus == 0) {
      spinner.succeed(`Device Booted`);
      const installedAppName = await listAllAppsOnDevice();
      if (installedAppName) {
        openMendixAppSpinner.start();
        const openedApp = await openMendixApp({
          installedAppName,
          openMendixAppSpinner,
        });
        if (openedApp) {
          openMendixAppSpinner.succeed(`
            --------
            ✅ Mendix App Open
            ✅ Keep this Terminal Open to Keep Android Sim Running
            🚀 #GOMAKEIT
            --------
          `);
        }
      } else {
        setTimeout(async () => {
          afterBootSpinner.start();
          const installedSuccess = await installMendixApp({
            afterBootSpinner,
          });
          if (installedSuccess.includes("Success")) {
            afterBootSpinner.succeed(`App Installed`);
            openMendixAppSpinner.start();
            const installedAppName = await listAllAppsOnDevice();
            const openedApp = await openMendixApp({
              installedAppName,
              openMendixAppSpinner,
            });
            if (openedApp) {
              openMendixAppSpinner.succeed(`
            --------
            ✅ Mendix App Open
            ✅ Keep this Terminal Open to Keep Android Sim Running
            🚀 #GOMAKEIT
            --------
          `);
            }
          }
        }, 1000);
      }
    }
  }

  if (argv.env) {
    const { framework } = await inquirer.prompt([
      {
        type: "list",
        message: "What type Of ENV do you want",
        name: "framework",
        choices: Object.keys(envConfigs),
      },
    ]);
    const userSelected = envConfigs[framework];
    const stringifyObj = stringify(userSelected);
    await writeFile(".env", stringifyObj);
    console.log(`
    ---------
    ✅ .env Generated - Remember to set the Path to Windows
    🚀 #GOMAKEIT
    ---------
    `);
  }
})();
