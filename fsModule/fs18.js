var fs = require("fs");
function test(srcFile, destination){
  return new Promise ((resolve,reject) => {
    fs.access(srcFile, error => {
      if (error){
        reject ("File does not exists");
        }
      else{
        fs.readFile(srcFile, (err, data)=> {
          if(err) {
              reject("Error reading content from file");
          }
          else {
            fs.writeFile(destination, data,(err)=>{
              resolve("Content written to file successfully");
            });
          }
        });
      }
    });
  });
};
module.exports = test;