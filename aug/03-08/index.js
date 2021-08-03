const fs = require("fs");
// create file
// writeFile will create or over write

// appendFile will create file
fs.appendFile("newText.txt", "I am text from NodeJs 😎 \n", (err) => {
  if (err) throw err;
  console.log("File is done 👍🏻");
});

// read File
fs.readFile("./longText.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// read file Sync
const data = fs.readFileSync("./longText.txt");
console.log(data.toString());
console.log("reading sync Done ✅");

// rename file
// fs.rename("./hello.txt", "./hey.txt", (err) => {
//   if (err) throw err;
//   console.log("Rename done ✅");
// });

// delete file
// const filePathName = "./something.txt";
// fs.unlink(filePathName, (err) => {
//   if (err) throw err;
//   console.log("File deleted, done ✅");
// });

// copy file
fs.copyFile("./original.txt", "./copyFromOG.txt", (err) => {
  if (err) throw err;
  console.log("Copy file, Done ✅");
});

// open file
// fs flags
// https://nodejs.org/docs/latest-v12.x/api/fs.html#fs_file_system_flags