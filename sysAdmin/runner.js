const { spawn } = require('node:child_process');
const ipc = require('node-ipc')

// options object, universal across child processes
optionsObject = {
    stdio: [ 'pipe', 'pipe', 'pipe', 'ipc' ]
}

ipc.config.id = 'runner';
ipc.config.retry = 1500;
ipc.config.silent = true;
ipc.serve(() => ipc.server.on('Runner Communicator Online', message => {
  console.log(message);
}));
ipc.server.start();

// create child processes out of other files
const api = execFile('./../mbtaInterface/main.js', optionsObject, (error, stdout, stderr) => {
    if(error) {
        throw error;
    }
    console.log(stdout);
});
const bot = execFile('./../discordFrontend/index.js', optionsObject, (error, stdout, stderr) => {
    if(error) {
        throw error;
    }
    console.log(stdout);
})