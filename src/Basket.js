class Basket {

    constructor(capacity) {
        this.items = [];
        this.capacity = capacity || 1000;
        this.currentLevel = 0;
        this.totalCost = 0;
        this.SKU = {BGL : 'bagels', COF : 'coffee'};
        this.item = {
            bagels :{ "O": 0.49, "P" : 0.39, "E": 0.49 },
            coffee :{ "L": 0.99 }
            }
        this.offers = {
            'O' : [6, 2.49],
            'P' : [12, 3.99],
            'E' : [6, 2.49],
            'L' : [1000, 2.49]            
            }
    }

    addNew(orders)
    {
        orders.forEach(i => { 

        let typeOfItem = this.SKU[i[1].split('').splice(0,3).join('').toUpperCase()]; 
        console.log(typeOfItem);

        let typeOfFlavour = i[1].split('').splice(3,4).join('').toUpperCase();
        
        //console.log(typeOfBagel);
        console.log(this.item[typeOfItem][typeOfFlavour]);
        //console.log(i[0]);
        this.priceShitUp(i[0],typeOfItem,typeOfFlavour);
        //console.log(this.totalCost);
        //console.log(this.item);
        //console.log(`typeOfItem: ${typeOfItem}, typeOfBagel: ${typeOfBagel}`);
        //console.log(`totalCost: ${this.totalCost}, eachPrice: ${this.item[typeOfItem[typeOfBagel]]}, i[0]: ${i[0]}`);
        })
    }

    priceShitUp(quantity, typeOfItem, typeOfFlavour) {
        console.log(quantity)

        while (quantity >= this.offers[typeOfFlavour][0]) {
            console.log('hi')
            this.totalCost += this.offers[typeOfFlavour][1]
            quantity -= this.offers[typeOfFlavour][0]
        }
        this.totalCost += quantity * this.item[typeOfItem][typeOfFlavour];
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