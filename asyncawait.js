const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    const third = await writeFile(
      "./content/third.txt",
      `This is a write file, this is the content: ${first}, ${second}`
    );
    console.log(first, second, third);
  } catch (error) {
    console.log(error);
  }
};

start()
