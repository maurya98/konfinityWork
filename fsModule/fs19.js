var fs=require("fs");
var fsg=require("./fs4");
function test(sourcePathToFile, destinationPathToFile){
  console.log(sourcePathToFile, destinationPathToFile);
  return new Promise((resolve,reject)=>{
    fs.copyFile(sourcePathToFile, destinationPathToFile, error => {
  if (error) {
    throw error;
  } else {
    resolve("Content copied successfully");
   // fsg.test(); 
  }
});
    });
  }
module.exports=test;