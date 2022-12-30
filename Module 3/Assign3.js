const fs = require("fs");

let fileToWatch = "sample.txt";
let backupFolder = "backup";

if (!fs.existsSync(backupFolder)) fs.mkdirSync(backupFolder);

try {
  console.log(`Started watching file ${fileToWatch}`);
  fs.watch(fileToWatch, (eventType) => {
    if (eventType === "change") {
      console.log("File changed! Backing up ....");
      fs.readFile(fileToWatch, (err, data) => {
        if (err) {
          console.log("Error: ", err);
          return;
        }
        fs.writeFile(backupFolder + "/" + fileToWatch, data, (err) => {
          if (err) console.log("Error happened: ", err.code);
          else console.log("Saved to backup file");
        });
      });
    }
  });
} catch (error) {
  if (error.code === "ENOENT") console.log("File doesn't exist");
  else console.log(error);
}
