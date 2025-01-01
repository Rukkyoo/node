const { readFile } = require("fs");

console.log("started a first task");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("completed first task");
});
console.log("starting next task");

// Due to this being an async func, the first console log reads then the readfile func is put on hold until the last console log reads before it runs

// The order of the console logs is:
// started a first task
// starting next task
// completed first task (when the readfile func is done)
// Hello this is first text file (the result of the readfile func)