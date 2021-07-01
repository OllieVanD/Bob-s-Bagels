// const Bagels = require("./Bagels.js");

require("./Bagels.js");

class Basket {

    constructor(capacity) {
        this.items = [];
        this.capacity = capacity || 1000;
        this.currentLevel = 0;
        this.totalCost = 0;
        
    }
   SKU = {BGL : 'bagels', COF : 'Coffee'};

    item = {bagels :{ "O": 2, "C" : 1, "E": 2,
     }};
    
    addNew(orders)
    {
        orders.forEach(i => { 

        let typeOfItem = this.SKU[i[1].split('').splice(0,3).join('').toUpperCase()]; 
        console.log(typeOfItem);

        let typeOfBagel = i[1].split('').splice(3,4).join('').toUpperCase();
        
        //console.log(typeOfBagel);
        console.log(this.item[typeOfItem][typeOfBagel]);
        console.log(i[0]);
        this.totalCost += (i[0] * this.item[typeOfItem][typeOfBagel]);
        console.log(this.totalCost);
        //console.log(this.item);
        //console.log(`typeOfItem: ${typeOfItem}, typeOfBagel: ${typeOfBagel}`);
        //console.log(`totalCost: ${this.totalCost}, eachPrice: ${this.item[typeOfItem[typeOfBagel]]}, i[0]: ${i[0]}`);
        })





    }


    add(item){
        for (let i = 0; i<item.length;i++){

            //Get the price if the bagel exists isthis.bagels
            if (this.bagels[item[i]] != null)

            {console.log(`The ${item[i]} is: £${this.bagels[item[i]]}`);
            this.totalCost += this.bagels[item[i]];
            }
            else{ console.log("Item added doesn't have a price.");
            }
            
            //Check if the bagel is already in the basket.
            if (this.duplicateChecker(item[i]))
            {

                console.log( `You already have a ${item[i]} bagel in your basket.`);

            }
            //Check if basket is full
            if (this.isFull()){
                console.log('Basket is full');
                return this.items;
            }else {
                this.items.push(item[i]);
                this.currentLevel++;
            }
        } return this.items;
    }

    remove (item)
    {
        const index = this.items.indexOf(item);
        this.items.splice(index, 1);
        return this.items;
    }

    isFull(){
        if (this.currentLevel>=this.capacity){
            return true;
        } else {
            return false;
        }
    }

    increaseCapacity(increase)
    {
        this.capacity +=increase;
    }

    duplicateChecker (bagel)
    { 
        if (this.items.includes(bagel)){
            return true;

        }
        else {return false;}
    }

    totalPrices ()
    {return this.totalCost.toString();}

    reducePrice(amount) 
    { 
        this.totalCost -=amount;
    }

    discountFactorPercent(DF)
    {
        this.totalCost *= (100 - DF )/100;

    }
    changePrice(bagel, newPrice)
    { 
        this.bagels[bagel] = newPrice;

    }
}

module.exports = Basket;