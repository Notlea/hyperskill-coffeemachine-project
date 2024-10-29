 

 

const input = require('sync-input');
//espresso, 250 ml of water and 16 g of coffee beans. It costs $4.
//latte, 350 ml of water, 75 ml of milk, and 20 g of coffee beans. It costs $7.
//cappuccino, 200 ml of water, 100 ml of milk, and 12 g of coffee beans. It costs $6.
let amountOfWater = 400;
let amountOfMilk = 540;
let amountOfBeans = 120;
let amountOfSugar = 100;
let numberOfCups = 9;
let amountOfMoney = 550;

function printState() {
 console.log(`The coffee machine has:
   ${amountOfWater} ml of water
   ${amountOfMilk} ml of milk
   ${amountOfBeans} g of coffee beans
   ${amountOfSugar} g of sugar
   ${numberOfCups} disposable cups
   ${amountOfMoney} of money`);
};

function brewCoffee(type, optionalSugar = false) {
let water = 0;
let milk = 0;
let beans = 0;
let sugar = 0;
let price = 0;  

 switch (type) {
   case "1":
     water = 250;
     milk = 0;
     beans = 16;
     sugar = 10;
     price = 4;
     break;
   case "2":
     water = 350;
     milk = 75;
     beans = 20;
     sugar = 20;
     price = 7;
     break;
   case "3":
     water = 200;
     milk = 100;
     beans = 12;
     sugar = 14;
     price = 6;
     break;
 };
     amountOfWater -= water;
     amountOfMilk -= milk;
     amountOfBeans -= beans;
     amountOfSugar = (optionalSugar == true) ? amountOfSugar - sugar : amountOfSugar;
     numberOfCups -= 1;
     amountOfMoney += price;  
};
function getRecipe(type) {
let water = 0;
let milk = 0;
let beans = 0;
let sugar = 0;

 switch (type) {
   case "1":
     water = 250;
     milk = 0;
     beans = 16;
     sugar = 10;
     price = 4;
     break;
   case "2":
     water = 350;
     milk = 75;
     beans = 20;
     sugar = 20;
     price = 7;
     break;
   case "3":
     water = 200;
     milk = 100;
     beans = 12;
     sugar = 14;
     price = 6;
     break;
 };
 return [water, milk, beans, sugar];
};
function  checkResources(recipe) {
   if (amountOfWater -  recipe[0] < 0) {
     console.log("Sorry, not enough water!");
     return false;  
   } else if (amountOfMilk - recipe[1] < 0) {
     console.log("Sorry, not enough milk!");
     return false;  
   } else if (amountOfBeans - recipe[2] < 0) {
     console.log("Sorry, not enough beans!");
     return false; 
   } else if (numberOfCups - 1 < 0) {
     console.log("Sorry, not enough cups!");
     return false;
   } else if (amountOfSugar - recipe[3] < 0) {
     console.log("Sorry, not enough sugar!");
     return false;
   }
   return true;
};

let on = true;

while (on) {
 let order = input("Write action (buy, fill, take, remaining, exit): ");
 switch (order) {
   case "buy":
     let typeOfCoffee = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu: ");
     let optionalSugar = input("Do you want sugar? yes - yes, no - no: ");
     if (typeOfCoffee == "back") {
       break;
     }
     if (checkResources(getRecipe(typeOfCoffee)) == true) {
       console.log("I have enough resources, making you a coffee!");
       brewCoffee(typeOfCoffee, optionalSugar == "yes" ? true : false);
     } else {
       console.log("Sorry, not enough water!");
     }     
     break;
   case "fill":
     let waterToAdd = Number(input("Write how many ml of water you want to add: "));
     amountOfWater += waterToAdd;
     let milkToAdd = Number(input("Write how many ml of milk you want to add: "));
     amountOfMilk += milkToAdd;
     let beansToAdd = Number(input("Write how many grams of coffee beans you want to add: "));
     amountOfBeans += beansToAdd;
     let cupsToAdd = Number(input("Write how many disposable cups you want to add: "));
     numberOfCups += cupsToAdd;   
     break;
   case "take":
     console.log(`I gave you \$${amountOfMoney}`);
     amountOfMoney = 0;
     break;
   case "remaining":
     printState();
     break;
   case "exit":
     on = false;
     break;
   };
}; 

