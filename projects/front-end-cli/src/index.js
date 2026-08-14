#!/usr/bin/env node

const argv = require("yargs").argv;
const os = require("os");
const inquirer = require("inquirer");

const USER_PLATFORM = os.platform();
// Android
const { mainAndroidProcess } = require("./android/main");

//Ios
const { mainIosProcess } = require("./ios/main");

//Env
const { mainEnvProcess } = require("./env/main");

// Very Anonymous Function Invoking itself
(async () => {
  if (argv.ios) {
    if (USER_PLATFORM !== "darwin") {
      console.error(`
      -----
      ❌ You must have a Mac to Run IOS
      -----
      `);
      return;
    }
    mainIosProcess();
  }
  if (argv.android) {
    mainAndroidProcess();
  }
  if (argv.env) {
    mainEnvProcess();
  }
  if (!argv._[0]) {
    const options = {
      ios: () => mainIosProcess(),
      android: () => mainAndroidProcess(),
      env: () => mainEnvProcess(),
    };
    const { noArgs } = await inquirer.prompt([
      {
        type: "list",
        message: "What do you want to do",
        name: "noArgs",
        choices: Object.keys(options),
      },
    ]);
    const userSelected = options[noArgs];
    if (userSelected) {
      userSelected();
    }
  }
})();
