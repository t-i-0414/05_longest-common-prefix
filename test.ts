import longestCommonPrefix from "./";
const chalk = require("chalk");

if (longestCommonPrefix(["flower", "flow", "flight"]) === "fl") {
  console.log(chalk.green("Test passed!"));
} else {
  console.log(chalk.red("Test failed!"));
}

if (longestCommonPrefix(["dog", "racecar", "car"]) === "") {
  console.log(chalk.green("Test passed!"));
} else {
  console.log(chalk.red("Test failed!"));
}
