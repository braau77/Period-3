var width = prompt("What is the width?");
//asks width
var height = prompt("What is the height?")
//asks height
function calculateArea(width,height){
//creates a function that takes two parameters
  var area = width * height;
//multiply width and height parameters
  return area;
//value is returned
}
var wallOne = calculateArea(width,height);
//pass width and height to the calculateArea function
window.alert(wallOne)
//pops up area ti screeb