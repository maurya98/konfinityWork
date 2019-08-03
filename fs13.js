const fs = require("fs");
const path = require("path");
const test = (pathToFile, index) => {
  return new Promise ((resolve,reject) => {
    fs.readdir(pathToFile,(err,file)=> {
      if(err){
        reject("Error occured while fetching files from Directory");}
      else{
        var newp = path.join(pathToFile,file[index]);
        var data = fs.readFileSync(newp,(error,file) => {
          return(file.toString());  
        });
        var stats = fs.statSync(newp, (error, stats) => {
          return (st.toString());
        });
        var obj = {data : data.toString(), size : stats.size, birthTime : stats.birthtimeMs, filename : file[index]};
        resolve(obj);
        }
    });
  });
};
module.exports=test;