// Answer 1: Understanding the JSON schema
    const shirt = `{
     "name": "Casual Shirt",
     "price": 19.99,
     "size": "M",
     "neckLine": "V-neck"
    }`;

    const pants = `{
     "name": "Jeans",
     "price": 49.99,
     "size": "L",
     "fitType": "Slim"
     }`;

     const shoes = `{
     "name": "Sneakers",
     "price": "69.99",
     "size": 42,
     "brand": "Nike"
     }`;

// Answer 2: Convert the JSON objects
    const shirtObj = JSON.parse(shirt);
    const pantsObj = JSON.parse(pants);
    const shoesObj = JSON.parse(shoes);

// Answer 3: Parent class
class Item{
    constructor(item) {
        this.name = item.name;
        this.price = parseFloat(item.price);
        this.size = item.size;
    }

    getItemDescription() {
        return `Item: ${this.name}, Price: $${this.price.toFixed(2)}, Size: ${this.size}`;
    }
}

// Answer 4: Child Classes
// Child 1
class Shirt extends Item {
    constructor(item) {
        super(item);
        this.neckLine = item.neckLine;
    }

    getShirtNeckLine() {
        return `This shirt has a ${this.neckLine} neckline.`;
    }
}

// Child 2
class Pants extends Item {
    constructor(item) {
        super(item);
        this.fitType = item.fitType;
    }

    getPantsFitType() {
        return `These pants has a ${this.fitType} fit.`;
    }
}

// Child 3
class Shoes extends Item {
    constructor(item) {
        super(item);
        this.brand = item.brand;
    }

    getShoesBrand() {
        return `These shoes are from the brand ${this.brand}.`;
    }
}

// Answer 5: Singleton Shopping Cart
// Shopping cart class
class ShoppingCart{
    constructor() {
        if (ShoppingCart.instance) {
            return ShoppingCart.instance;
        }

        this.items = [];
        ShoppingCart.instance = this;
    }

    addItem(item) {
        this.items.push(item);
        console.log(`${item.name} has been added to the cart.`);
    }


    removeItem(item){
        const index = this.items.indexOf(item);
        if(index > -1) {
            this.items.splice(index, 1);
            console.log(`${item.name} has been removed from the cart.`);
        } else {
            console.log(`${item.name} is not in the cart.`);
        }
    }

    getItemCount() {
        return `Total of items inside the cart is: ${this.items.length}`;
    }

    getTotalPrice() {
        const total = this.items.reduce((sum, item) => sum + item.price, 0);
        return `Total price of items inside the cart is : $${total.toFixed(2)}`;
    }
}


// Answer 6: Creating Instances:
    const myShirt = new Shirt(shirtObj);
    const myPants = new Pants(pantsObj);
    const myShoes = new Shoes(shoesObj);

    const myCart = new ShoppingCart() 
// Answer 7: Adding objects to the Cart/Displaying information in the console:
    myCart.addItem(myShirt);
    myCart.addItem(myPants);
    myCart.addItem(myShoes);

    console.log(myCart.getItemCount());
    console.log(myCart.getTotalPrice());

    console.log(myShirt.getItemDescription());
    console.log(myShirt.getShirtNeckLine());

    console.log(myPants.getItemDescription());
    console.log(myPants.getPantsFitType());

    console.log(myShoes.getItemDescription());
    console.log(myShoes.getShoesBrand());