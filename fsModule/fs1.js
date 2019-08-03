const path = require("path");

function test(pathToFile,strPos,appstr){
  var baseName=path.basename(pathToFile);
  var dirName=path.dirname(pathToFile);
  var file;
  if(strPos==="start"){
    file=path.join(appstr,pathToFile);}
  if(strPos==="end"){
    file=path.join(pathToFile,appstr);}
    var obj={
      baseName:baseName,
      dirName:dirName,
      finalPath:file
      }
    
    return obj;
    

}

module.exports=test;