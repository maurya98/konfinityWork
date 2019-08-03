var fs=require("fs");
function test(file){
  return new Promise((resolve,reject)=>{
    fs.readdir(file,(error,data)=>{
      if(error){
        reject("Error occured while reading directory");}
        else{
          var dircount=0;
        var filecount=0;
        for(var i=0; i<data.length; i++){
          if((data[i].split("."))[1])
            filecount++;
          else
            dircount++;
        }
        var obj = {
          countFile : filecount,
          countDir : dircount,
          files : file
        };
        resolve(obj);
          }
      });
    });
  }

module.exports=test;