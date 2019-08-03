var fs = require("fs");
function test(file) {
  return new Promise((resolve, reject) => {
    fs.access(file, (err) => {
      if(err)
        reject("File does not exists");
      else{
          resolve("File exists");
      }
    });
  });
}
test()
.then(result => { return result; }) .catch(err=> { return err; });
module.exports = test;
  