'use strict'
const mylist = new ShoppingList();
const shoppingListButton = document.getElementById('addShoppingListItemButton');
shoppingListButton.addEventListener('click',addToShoppingList)
const content = document.getElementById('content')
const itemName = document.getElementById('name')
const itemDescription = document.getElementById('description')

function addToShoppingList(event) {
var newShoppingListItem = new ShoppingListItem(itemName.value,itemDescription.value);
mylist.addItem(newShoppingListItem)
content.innerHTML = mylist.render(newShoppingListItem)
}