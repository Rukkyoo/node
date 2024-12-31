const os = require("os")
// Info about the current user
const user = os.userInfo() // This is a function that returns the user information
console.log(user)

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS)