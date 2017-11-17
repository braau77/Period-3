var x = " ";
function rossBobart(){
  var x = document.getElementById('one').value;
  window.alert(x);
  localStorage.setItem("name",x);
}

function wetOnWet(){
  var beandon = localStorage.getItem("name");
  window.alert(beandon);
}