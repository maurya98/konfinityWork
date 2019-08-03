function test(file)  {
  return new Promise((resolve, reject) => {
    var fs = require("fs");
    fs.stat(file, (err,stat) => {
      if(err)
        reject("Error occured while calculating stats");
      else{
        abc = {
          birthTime : stat.birthtimeMs,
          modifiedTime : stat.mtimeMs,
          size : stat.size,
          type : stat.isFile()?"File":"Directory"
        };
        resolve(abc);
      }
    });
  });
}
  
  module.exports=test;