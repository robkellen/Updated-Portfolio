//npm package dependency
const fs = require("fs");
//data files for generation of README
const userPrompts = require("./utils/userPrompts");
const generateMarkdown = require("./utils/generateMarkdown");

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName + ".md", data, function (err) {
    if (err) {
    }
    console.log("Done");
  });
}

// function to initialize program
async function init() {
  let data = await userPrompts();
  let md = generateMarkdown(data);
  writeToFile("README-Test", md);
}

// function call to initialize program

init();
