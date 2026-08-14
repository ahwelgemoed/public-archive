const ora = require("ora");
const inquirer = require("inquirer");

// Android
const {
  witchSimulatorIsInstalled,
  checkIfBootHasCompleted,
  listAllAppsOnDevice,
  installMendixApp,
  startupSimulator,
  openMendixApp,
} = require("./android");

const mainAndroidProcess = async () => {
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
};

module.exports = {
  mainAndroidProcess,
};
