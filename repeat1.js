var stem2 = {
	classroom: "F103",
  students: 12,
};
var x = prompt("classroom or students?");
var lowerCase = x.toLowerCase();

if ((lowerCase === "classroom") || (lowerCase === "students")) {
	window.alert(stem2[lowerCase]);
}
else {
window.alert("You tried " + 1 + " times");
	for (i=2; i<4; i++){
  	var x = prompt("classroom or students?");
var lowerCase = x.toLowerCase();

if ((lowerCase === "classroom") || (lowerCase === "students")) {
	window.alert(stem2[lowerCase]);
  i = 4;
		}
else {
window.alert("You tried " + i + " times");
		}
  }
}
