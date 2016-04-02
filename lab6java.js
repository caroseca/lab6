

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


// shoppinglist.forEach(function(element){
// 	console.log(element.name + " $"  + element.price.toFixed(2));
// 	total += element.price;
// });

// console.log("Total: $" + total.toFixed(2));

shoppingList.forEach(function(element){
	var newElement = document.createElement('p');
	newElement.innerHTML = element.name +"... $" + element.price;
	document.body.appendChild(newElement);
	total += element.price;
});

var subtotal = total;
newPrice = document.createElement('p');
newPrice.innerHTML = "TOTAL is " + total;
document.body.appendChild(newPrice);

function myFunction() {
        var newName = document.getElementById("name").value;
        var newItem = document.getElementById("item").value;
        var newThing = newName + newItem;
        newThing.innerHTML = newName + "... $" + newItem;
        document.body.appendChild (newThing);
        

}