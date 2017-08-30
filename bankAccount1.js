var bankAccount1 = {};
bankAccount1["balance"] = 1000;
//shows the balance
var x = prompt("We want your money");
//asks how much money you want
var y = parseInt(x)
//parseInt forces it to be interger or NaN
window.alert(bankAccount1.balance + y);
//adds balance with the parseInt