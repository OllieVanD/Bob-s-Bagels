const assertEquals = require("../test-framework");
const Basket = require("../src/Basket");

//let input = ["Bagel1",'Bagel2','Bagel3']; 
//let expectedOutput = ["Bagel1",'Bagel2','Bagel3'];
//console.log(assertEquals(addItem(input),expectedOutput));

let basket;
basket = new Basket(1000);

let input 
let expectedOutput 
/*
console.log(`Testing that [${input}] => [${expectedOutput}]`);
console.log(assertEquals(basket.add(input),expectedOutput));

basket = new Basket(1000);

input = ["Bagel1"];

basket.add(input);
expectedOutput = [];
console.log(`Testing that [${input}] => [${expectedOutput}]`);
console.log(assertEquals(basket.remove('Bagel1'),expectedOutput));

basket = new Basket(3);

input = ['Bagel1','Bagel2','Bagel3','Bagel4'];
expectedOutput = ["Bagel1",'Bagel2','Bagel3'];

console.log(`Testing that [${input}] => [${expectedOutput}]`);
console.log(assertEquals(basket.add(input),expectedOutput));

basket = new Basket(10);

input = 5;
expectedOutput = '15';
basket.increaseCapacity(input);


console.log("Testing that basket capacity has increased by 5 Bagels.");
console.log(assertEquals(basket.capacity.toString(),expectedOutput));

*/
console.log("Extended Test");
basket = new Basket(4);

input = ([[2, 'BGLC'],[12, 'BGLO'], [6, 'BGLE']]);



basket.addNew(input);

 console.log(assertEquals(basket.totalPrices(),'38' ));



