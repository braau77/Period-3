var bankAccount1 = {};
bankAccount1["balance"] = 10000000000000000;
var widthdraw = prompt("We no want your money");
bankAccount1["balance"] -= widthdraw;
window.alert(bankAccount1.balance);