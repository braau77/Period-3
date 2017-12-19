window.onload=function()
{
	sessionStorage.clear();
	localStorage.clear();
};
var cartPrice = [];
function buyPekingDuck(){
	var qty = document.getElementById('firstItem').value;
	var price = qty * 29.99;
  cartPrice.push(price);
  var total = 0;
  for (var i = 0; i < cartPrice.length; i++) {
	var cost = total += cartPrice[i];
}
	document.getElementById('subtotal').innerHTML= "Sub Total:  $" + cost.toFixed(2);
	document.getElementById('atotal').innerHTML= "Total With Tax: $" + (cost * 1.04712).toFixed(2);
	sessionStorage.setItem("key1", qty+" Peking Duck ");
	
}
function buyWalnutShrimp(){
	var qty = document.getElementById('secondItem').value;
	var price = qty * 9.99;
  cartPrice.push(price);
  var total = 0;
  for (var i = 0; i < cartPrice.length; i++) {
	var cost = total += cartPrice[i];
	 }
	document.getElementById('subtotal').innerHTML= "Sub Total:  $" + cost.toFixed(2);
	document.getElementById('atotal').innerHTML= "Total With Tax: $" + (cost * 1.04712).toFixed(2);
	sessionStorage.setItem("key2", qty+" Walnut Shrimp ");
}
function buyJianDui(){
  var qty = document.getElementById('thirdItem').value;
	var price = qty * 4.99;
  cartPrice.push(price);
  var total = 0;
  for (var i = 0; i < cartPrice.length; i++) {
	var cost = total += cartPrice[i];
	 }
	document.getElementById('subtotal').innerHTML= "Sub Total:  $" + cost.toFixed(2);
	document.getElementById('atotal').innerHTML= "Total With Tax: $" + (cost * 1.04712).toFixed(2);
	sessionStorage.setItem("key3", qty+ " Jian Dui ");
}
function buyOrangeChicken(){
  var qty = document.getElementById('fourthItem').value;
	var price = qty * 14.99;
  cartPrice.push(price);
  var total = 0;
  for (var i = 0; i < cartPrice.length; i++) {
	var cost = total += cartPrice[i];
	 }
	document.getElementById('subtotal').innerHTML= "Sub Total:  $" + cost.toFixed(2);
	document.getElementById('atotal').innerHTML= "Total With Tax: $" + (cost * 1.04712).toFixed(2);
	sessionStorage.setItem("key4", qty+ " Orange Chicken ");
}
function buyLiverChowFun(){
  var qty = document.getElementById('fifthItem').value;
	var price = qty * 19.99;
  cartPrice.push(price);
  var total = 0;
  for (var i = 0; i < cartPrice.length; i++) {
	var cost = total += cartPrice[i]; 
}
	document.getElementById('subtotal').innerHTML= "Sub Total:  $" + cost.toFixed(2);
	document.getElementById('atotal').innerHTML= "Total With Tax: $" + (cost * 1.04712).toFixed(2);
	sessionStorage.setItem("key5", qty+ " Liver Chow Fun ");
	
}

function makePayment(){
  cartContents=[];
	for (var i = 0; i < sessionStorage.length; i++){
	cartContents.push(sessionStorage.getItem(sessionStorage.key(i)));}
	localStorage.setItem("cartItems", JSON.stringify(cartContents));
  localStorage.setItem("shouldBeTheTotal", JSON.stringify(cartPrice));
  location.href="restaurant2.html";
}