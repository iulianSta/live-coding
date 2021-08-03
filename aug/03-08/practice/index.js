// Import or require File Sistem, we use only require
const fs = require("fs");

// Write file - create file
fs.writeFile("./file.txt", "I'm a new file :)", (err) => {
  if (err) throw err;
  console.log("The file was succesfull created!");
});

// Create file using append file
fs.appendFile("./fileText.txt", "I was created using appendFile \n", (err) => {
  if (err) throw err;
  console.log("Success!");
});

// Read file
fs.readFile("./file.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

fs.readFile("./fileText.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// Read file Sync
const someData = fs.readFileSync("./fileText.txt");
console.log(someData.toString());
console.log("readSync is Done!");

// Rename file
fs.rename("./fileText.txt", "./renamedFileText.txt", (err) => {
  if (err) throw err;
  console.log("Rename is Done!");
});

// Copy file
fs.copyFile("./file.txt", "./copyFromFile.txt", (err) => {
  if (err) throw err;
  console.log("Done!");
});

// Delete file
const filePathName = "./copyFromFile.txt";
fs.unlink(filePathName, (err) => {
  if (err) throw err;
  console.log("File deleted!");
});

// Open file
fs.open("file.txt", "w", (err, data) => {
  if (err) throw err;
  console.log("File is opened and ready to use it!");
});
