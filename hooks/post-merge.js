const chalk = require("chalk");
const { exec } = require("./exec");

const branchName = exec("git rev-parse --abbrev-ref HEAD", { trim: true });
const isInRemote =
  exec(`git show-branch remotes/origin/${branchName}`, { toString: false })
    .code === 0;

if (branchName == "main") {
  exec("yarn deploy", { trim: true });
}

