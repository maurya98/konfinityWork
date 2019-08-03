var fs = require("fs");
function test(file) {
  return new Promise(function(resolve, reject) {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        reject("No file found");
      } 
      else {
        var functionCount = 0;
        var variableCount  = 0;
        var str = data.replace(/\n/g," ").split(" ");
        for(var i=0; i<str.length; i++){
          if(str[i]==="let" || str[i]==="const" || str[i]==="var")
            variableCount += 1;
          else if(str[i]==="function" || str[i]==="=>")
            functionCount += 1;
        }
        var obj = {
          functionCount : functionCount,
          variableCount : variableCount
        };
        resolve(obj);
      }
      });
    });
}

test()
  .then(result => {
    return (result);
  })
  .catch(err => {
    return(err);
  });
  module.exports = test;