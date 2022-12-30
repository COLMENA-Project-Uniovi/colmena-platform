const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

var path = require("path");
var projectPath = path.join(__dirname, "..", "dist");

const config = {
    user: "colmenaproject",
    password: "2dW0ke32?",
    host: "94.127.187.103",
    port: 21,
    localRoot: projectPath,
    remoteRoot: "/dev.colmenaproject.es",
    include: ["*"],
    deleteRemote: true,
    forcePasv: true,
    sftp: false,
};

ftpDeploy
    .deploy(config)
    .then((res) => console.log("🚀🚀🚀🚀🚀🚀"))
    .catch((err) => console.log(err));
