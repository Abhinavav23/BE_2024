// const OS = require("os");
const {arch, cpus, totalmem, uptime, freemem} = require("os");

// console.log("PLatform ---", OS.platform());
// console.log("dir ---", OS.homedir());
// console.log("dir ---", OS.arch());
// console.log("dir ---", OS.release());

console.log("cpus ---", cpus());
console.log("memory ---", ((totalmem()/1024)/1024)/1024);
console.log("free memory ---", ((freemem()/1024)/1024)/1024);
console.log("uptime ---", (uptime()/3600)/24);

