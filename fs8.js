var fs=require("fs");
var path=require("path");
function test(file){
  return new Promise((resolve,reject)=>{
    fs.readdir(file,(error,data)=>{
      if(error){
        reject("Error occured while reading directory");}
        else{
          var arr=[];
        for(var i=0; i<data.length; i++){
          if((data[i].split("."))[1]){
            arr.push(data[i]);}
          else{
            var dir=path.join(file,data[i]);
            arr.push(fs.readdir(dir,(err,data2)=>{
              return data2;
              }));
            }   
        }
        resolve(arr);
          }
      });
    });
  }
module.exports=test;