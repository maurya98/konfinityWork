var fs = require("fs");
function test(file, str){
  return new Promise ((resolve,reject) => {
    fs.access(file, error => {
      if (error){
        fs.writeFile(file,str, (err)=> {
          if(err) {
              reject("Error writing content in file");
          }
          else {
            resolve("Content written to file successfully");
          }
        });
      }
      else{
        reject("File already exists provide another name");}
    });
  });
}
module.exports = test;