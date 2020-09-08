const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

console.log(`${vegetarian} + ${hawaiian} + ${pepperoni} + ${pizzaPrice}`);

//Put your Javscript code here:
var orderQuantity;
var orderTotal;
var orderName;
var cookingTime;

//iteration2
alert(`Hey! Happy to serve your pizza`); 

theseAreOurPizza();

function theseAreOurPizza() {
    alert(`On our menu we have ${vegetarian}, ${hawaiian} and ${pepperoni}`);
    askForPizza();
}

function askForPizza() {
    orderName = prompt('Enter the name of the pizza you want to order today');
    validateOrderName(orderName);
}

function validateOrderName(order) {
    if (order === "vegetarian" || order === "hawaiian" || order === "pepperoni") {
        //Check for similar name
        alert(`You have selected ${order}`);
        validateOrderCount(order);
    } else {
        alert(`This is not a pizza`);   
        theseAreOurPizza();
        askForPizza(); // Do function to ask if they want another pizza
    }
}

function validateOrderCount(order) {
    // console.log(order);
    orderQuantity = prompt(`How many of ${order} would you like?`); //iteration3
    orderTotal = (orderQuantity * pizzaPrice); //iteration4
    calculateCookingTime(orderQuantity);
}

function calculateCookingTime(orderQ) {
    if (orderQ <= 2) {
        cookingTime = 10;
    } else if (orderQ > 2 && orderQ < 6) {
        cookingTime = 15;
    } else {
        cookingTime = 20;
    }
    alert(`Great I'll get started on your ${orderName} right away. It will cost ${orderTotal}kr. The pizzas will take ${cookingTime} minutes`);
}

alert('Thank you for the visit!')