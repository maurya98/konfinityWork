var fsg = require("./fs4");
var fs = require("fs");
function test(name){
  return new Promise((resolve,reject)=>{
    fsg(name).then(result =>{
      fs.rmdir(name, err=>{
        if(err)
          reject (error);
        else
          resolve("File exists : Directory removed");        
      });
    })
    .catch(err=>{
        reject("cannot remove directory because : File does not exists");
    });
  });
}

module.exports = test;