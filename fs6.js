var fs=require('fs');
const path = require("path");
function test(file){
  return new Promise((resolve,reject)=>{
    var jscount=0;
    var txtcount=0;
    var countother=0;
    fs.readdir(file,(err,stat)=>{
     // console.log(stat);
      if(err){
        reject("Error occured while reading directory");
        }
      else{
        for(var i=0; i<stat.length; i++){
          if((stat[i].split("."))[1]==="js"){
            jscount++;}
          else if((stat[i].split("."))[1]==="txt"){
            txtcount++;}
          else{
            countother++;}
        }
        var object = {
          countJs : jscount,
          countTxt : txtcount,
          count : countother,
          files : stat
        };
        resolve(object);
 
        }
      });
    });
  }
  module.exports=test;