var fs=require("fs");
var fsg=require("./fs4");
function test(pathToFile, msg){
  return new Promise((resolve,reject)=> {
    fsg(pathToFile).then(result =>{
     fs.appendFile(pathToFile,msg, error => {
       if(error)
        reject (error);
      else
        resolve("Data appended successfully");
     });
    })
    .catch(err =>{
      reject("Cannot append data because : File does not exists");
    });
  });
}

test()
.then( result => { return result; }) .catch(err => {return err;});
module.exports=test;