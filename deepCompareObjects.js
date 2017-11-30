/**
* JavaScript Object Deep Comparison, Simple & Efficient
*
* Usage: deepCompareObjects(objA,objB);
* Returns true / false based on the comparison result
*
* Author: kcak11 --> github.com/kcak11
*/
function deepCompareObjects(a, b){
if(!(a && b)){
  return false;
}
if(a===b){
  return true;
}
String.prototype.repAll=function(str,rep){
  var r=new RegExp(str,"g");
  return this.replace(r,rep);
};
var rawA=getRaw(a);
var rawB=getRaw(b);
  function getRaw(obj){
    var json=JSON.stringify(obj);
    json=json.repAll("{","^").repAll(",","^").repAll("}","^").repAll(":","^");
    return json.split("^").sort().join("^");
  }
return rawA===rawB;
}
