#!/usr/bin/env node
const inquirer = require("inquirer");
var argv = require("yargs").argv;
const stringify = require("dotenv-stringify");
const { envConfigs } = require("./configs/env");
const { writeFile } = require("fs").promises;

// Very Anonomouse Function Invoking itself
(async () => {
  if (argv.ios) {
    console.log("argv", argv);
    // Open IOS SIMULATOR
    // INSTALL Mendix APP
    //OPEN Menix APP
  }
  if (argv.andoid) {
    console.log("argv", argv);
    // Open Android SIMULATOR
    // INSTALL Mendix APP
    //  OPEN Menix APP
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
    .env Generated - Remember to set the Path to Windows
    ---------
    #GOMAKEIT 🚀
    ---------
    `);
  }
})();
