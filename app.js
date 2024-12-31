const { readFileSync, writeFileSync } = require('fs'); 

const file = readFileSync("./content/first.txt", "utf8")
const secondFile = readFileSync("./content/second.txt", "utf8")
console.log(file, secondFile)