const fs = require("fs");
const path = require("path");
const test = (pathToFile, index) => {
  return new Promise ((resolve,reject) => {
    fs.readdir(pathToFile, (err,file)=> {
      if(err)
        reject("Error occured while fetching files from Directory");
      else{
        var newpath = path.join(pathToFile,file[index]);
        var data = fs.readFileSync(newpath,(err,file) => {
          return(file.toString());  
        });
        var obj = {data : data.toString(), filename : file[index]};
        resolve(obj);
      }
    });
  });
};
module.exports=test;