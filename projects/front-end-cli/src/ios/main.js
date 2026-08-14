const ora = require("ora");

// IOS
const {
  openLastUsedDevice,
  getIdOfOpenDevice,
  installMendixAppOnIos,
  TIME_TO_WAIT_FOR_SIM_BOOT,
} = require("./ios");

const mainIosProcess = async () => {
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
        await installMendixAppOnIos({ idOfOpenDevice }); //TODO
      }
    }, TIME_TO_WAIT_FOR_SIM_BOOT);
  }
};

module.exports = {
  mainIosProcess,
};
