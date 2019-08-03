 
const test = (name) => {
  return new Promise ((resolve,reject) => {
    const fs = require("fs");
    const path = require("path");
    fs.readdir(name, (err,file)=> {
      if(err)
        reject("Error occured while reading directory");
      else{ 
        var walkSync = function(dir, count) {
            var fs = fs || require('fs'),
                files = fs.readdirSync(dir);
            files.forEach(function(file) {
              if (fs.statSync(path.join(dir,file)).isDirectory()) {
                count.dircount += 1;
                count = walkSync(path.join(dir,file), count);
              }
              else {
                count.filecount += 1;
              }
            });
            return count;
          };
        var count = {
          dircount:0,
          filecount:0
          }; 
        var counts = walkSync(name,count);
        var o = {
          countDir : count.dircount,
          countFile : count.filecount
        };
        resolve(o);
      }
    });
  });
};
module.exports = test;