

var shoppingList = [
	{
		name: "grapes",
		price: 2.00
	},
	{
		name: "buns",
		price: 3.00
	},
	{
		name: "tofu",
		price: 2.25
	},
	{
		name: "dinty moore beef stew",
		price: 2.79
	},
]

var total = 0;

shoppingList.forEach(function(element){
	var newElement = document.createElement('li');
	newElement.innerHTML = element.name +"... $" + element.price;
	document.getElementById('list').appendChild(newElement);
	total += element.price;
});

newPrice = document.createElement('p');
newPrice.innerHTML = "TOTAL is $" + total;
document.getElementById('total').appendChild(newPrice);

// Here's my function
function myFunction() {
      	var newName = document.getElementById("name").value;
       	var newNum = document.getElementById("cost").value;
       	var newCost = Number(newNum);

       	var newElement = document.createElement('li');
		newElement.innerHTML = newName +"... $" + newCost;
		document.getElementById('list').appendChild(newElement);

togetherTotal = 0;
togetherTotal = total += newCost;		
		// function total () {
		// 	newPrice = document.createElement('p');
		// 	newPrice.innerHTML = "TOTAL is $" += total +=newCost;
		// 	document.getElementById('total').appendChild(newPrice);
		};

