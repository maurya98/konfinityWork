var fs22 = require("./fs22");
var fs21 = require("./fs21");
var fs4 = require("./fs4");
function test(file){
  return new Promise ((resolve,reject)=> {
    fs4(file).then(result => {
      fs22(file).then(result => {
        resolve("File exists : Directory removed");
      })
      .catch(err =>{
        reject(err);  
      });
    })
    .catch( err => {
      fs21(file).then(result=> {
        fs22(file).then(result=>{
          resolve("New directory created : Directory removed");
        })
        .catch(err=>{
          reject (err);
        });
      })
      .catch(err=>{
        reject (err);
      });
    });
  });
}
module.exports = test;