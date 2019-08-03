var fs = require("fs");
function test(file, data) {
  return new Promise ((resolve,reject) => {
    fs.access(file, error => {
      if (error){
        reject ("File does not exists provide another name");
        }
      else{
        fs.appendFile(file,data,(err)=> {
          if(err) {
              reject("Error writing content in file");
          }
          else {
            resolve("Content appended to file successfully");
          }
        });
      }
    });
  });
}
module.exports = test;