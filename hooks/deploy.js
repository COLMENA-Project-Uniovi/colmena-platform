const chalk = require('chalk');
const {exec} = require('../scripts/exec');

const branchName = exec('git rev-parse --abbrev-ref HEAD', {trim: true});
// check if this branch already exists in the remote
const isInRemote = exec(`git show-branch remotes/origin/${branchName}`, {toString: false}).code === 0;

console.log(branchName);
console.log(isInRemote);




const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

var path = require("path");
var projectPath = path.join(__dirname, '..', 'dist');

// const config = {
//     user: "colmenaproject",
//     password: "2dW0ke32?",
//     host: "94.127.187.103",
//     port: 21,
//     localRoot: projectPath,
//     remoteRoot: "/dev.colmenaproject.es",
//     include: ["*"], 
//     deleteRemote: true,
//     forcePasv: true,
//     sftp: false,
// };

// ftpDeploy
//     .deploy(config)
//     .then((res) => console.log("🚀🚀🚀🚀🚀🚀"))
//     .catch((err) => console.log(err));