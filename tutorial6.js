const { readFileSync, writeFileSync } = require("fs");

const file = readFileSync("./content/first.txt", "utf8");
const secondFile = readFileSync("./content/second.txt", "utf8");
console.log(file, secondFile);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${file}, ${secondFile}`,
  { flag: "a" }
); // flag: 'a' appends the text to the file instead of overwriting it
