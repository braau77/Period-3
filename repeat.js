var stem2 = {
	classroom: "F103",
  students: 12,
};
var x = prompt("classroom or students?");
var lowerCase = x.toLowerCase();
//forces any capital letters to lower case
if ((lowerCase === "classroom") || (lowerCase === "students")) {
//if lowercase is strictly equal to classroom or lowercase is strictly equal to students it shows
	window.alert(stem2[lowerCase]);
}
else {
	tryAgain();
}

function tryAgain() {
//loops them again
	var x = prompt("classroom or students?");
var lowerCase = x.toLowerCase();

if ((lowerCase === "classroom") || (lowerCase === "students")) {
	window.alert(stem2[lowerCase]);
}
else {
	tryAgain();
}

}