const path = require("path");
const { exec } = require("child_process");
const spawnAsync = require("@expo/spawn-async");

const witchSimulatorIsInstalled = async () => {
  try {
    const { stdout } = await spawnAsync("emulator", ["-list-avds"]);
    return stdout;
  } catch (error) {
    throw new Error(error);
  }
};

const startupSimulator = async ({ selectedDevice, spinner }) => {
  exec(`emulator -avd ${selectedDevice}`, (err, stdout, stderr) => {
    if (err) {
      spinner.fail("Something Went Wrong");
      throw new Error(err);
    }
  });
};

const installMendixApp = async ({ afterBootSpinner }) => {
  try {
    const { stdout } = await spawnAsync("adb", ["install", getIDofApk()]);
    return stdout;
  } catch (error) {
    afterBootSpinner.fail("Something Went Wrong with App Install");
    throw new Error(err);
  }
};
const getIDofApk = () => {
  return path.join(__dirname, "..", "apks", "android.apk");
};

const openMendixApp = async ({ openMendixAppSpinner, installedAppName }) => {
  try {
    const { stdout } = await spawnAsync("adb", [
      "shell",
      "monkey",
      `-p ${installedAppName}`,
      "-v 1",
    ]);
    return stdout;
  } catch (error) {
    openMendixAppSpinner.fail("Mendix App could not be Opened");
    throw new Error(error);
  }
};

const listAllAppsOnDevice = async () => {
  try {
    const { stdout } = await spawnAsync("adb", ["shell", "pm list packages"]);
    const allApps = stdout.split("\n").find((x) => {
      if (x.includes("mendix")) return x;
    });
    if (allApps) {
      return allApps.split("package:")[1];
    } else {
      return false;
    }
  } catch (error) {
    console.log("error", error);
  }
};

const checkIfBootHasCompleted = async () => {
  try {
    const result = await spawnAsync("adb", [
      "shell",
      "am broadcast",
      "-a android.intent.action.ACTION_BOOT_COMPLETED",
    ]);
    // console.log("result", result);
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = {
  witchSimulatorIsInstalled,
  checkIfBootHasCompleted,
  listAllAppsOnDevice,
  installMendixApp,
  startupSimulator,
  openMendixApp,
};

// adb shell pm list packages

// adb shell monkey -p com.mendix.developerapp.min88 -v 1

//  cd ~/Library/Android/sdk/emulator
//./emulator -list-avds
// list out names Promoped user input
// Pixel_3a_API_30_x86

// emulator -avd avd_name

// ADD ANDROID TO PATH !!!

// adb devices // list booted devices
// adb shell
