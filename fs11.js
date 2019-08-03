var fs = require("fs");
function test(file) {
  return new Promise(function(resolve, reject) {
    fs.readFile(file,(err,content) => {
      if (err) {
        reject("No file found");
      } else {
        resolve(content.toString());
      }
    });
  });
}
module.exports=test;