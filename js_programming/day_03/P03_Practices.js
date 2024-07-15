
/*
create a custom class for Product with the following requirements:
    Attributes: name, price, quantity, description, product_id

    Actions:
    constructor: to initialize all attributes
    display_product_info: to display the product information (name, price, quantity, description)
*/

/**
 * Represents a product with attributes such as name, price, quantity, description, and product_id.
 *
 * @class Product
 * @constructor
 * @param {string} name - The name of the product.
 * @param {number} price - The price of the product.
 * @param {number} quantity - The quantity of the product.
 * @param {string} description - The description of the product.
 * @param {string} product_id - The unique identifier of the product.
 */
class Product {
    constructor(name, price, quantity, description, product_id) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
        this.product_id = product_id;
    }

    /**
     * Displays the product information (name, price, quantity, description, and product_id) in the console.
     *
     * @method display_product_info
     * @memberof Product
     * @returns {void}
     */
    display_product_info() {
        console.log(`Product Name: ${this.name}`);
        console.log(`Product Price: $${this.price}`);
        console.log(`Product Quantity: ${this.quantity}`);
        console.log(`Product Description: ${this.description}`);
        console.log(`Product ID: ${this.product_id}`);
    }
}
//test product object

let product1 = new Product("Laptop", 1200, 5, "15 inch, i5, 8GB RAM, 256GB SSD", "P001");
product1.display_product_info();


console.log("------------- Example of using AI ----------------------------");

/*Create an Animal class with the following attributes.
    Attributes: name, age, species, color, breed

    Actions:
    constructor: to initialize all attributes
    eat: displays the name +" is eating food"
    sleep: dispalys the name+ " is sleeping"
*/

/**
 * Represents an animal with attributes such as name, age, species, color, and breed.
 * It also includes methods for eating and sleeping.
 *
 * @class Animal
 * @constructor
 * @param {string} name - The name of the animal.
 * @param {number} age - The age of the animal.
 * @param {string} species - The species of the animal.
 * @param {string} color - The color of the animal.
 * @param {string} breed - The breed of the animal.
 */
class Animal {
    constructor(name, age, species, color, breed) {
        this.name = name;
        this.age = age;
        this.species = species;
        this.color = color;
        this.breed = breed;
    }

    /**
     * Displays a message indicating that the animal is eating food.
     *
     * @method eat
     * @memberof Animal
     * @returns {void}
     */
    eat() {
        console.log(`${this.name} is eating food`);
    }

    /**
     * Displays a message indicating that the animal is sleeping.
     *
     * @method sleep
     * @memberof Animal
     * @returns {void}
     */
    sleep() {
        console.log(`${this.name} is sleeping`);
    }
}


/**
 * Represents a dog, which is a child class of Animal.
 * It includes an additional attribute for the volume of bark sound and a method for barking.
 *
 * @class Dog
 * @extends Animal
 * @constructor
 * @param {string} name - The name of the dog.
 * @param {number} age - The age of the dog.
 * @param {string} species - The species of the dog.
 * @param {string} color - The color of the dog.
 * @param {string} breed - The breed of the dog.
 * @param {number} barkVolume - The volume of the dog's bark sound.
 */
class Dog extends Animal {
    constructor(name, age, species, color, breed, barkVolume) {
        super(name, age, species, color, breed);
        this.barkVolume = barkVolume;
    }

    /**
     * Displays a message indicating that the dog is barking at a specific volume.
     *
     * @method bark
     * @memberof Dog
     * @returns {void}
     */
    bark() {
        console.log(`${this.name} is barking at a volume of ${this.barkVolume}`);
    }  
}


/**
 * Represents a cat, which is a child class of Animal.
 * It includes an additional attribute for the volume of meow sound and a method for meowing.
 *
 * @class Cat
 * @extends Animal
 * @constructor
 * @param {string} name - The name of the cat.
 * @param {number} age - The age of the cat.
 * @param {string} species - The species of the cat.
 * @param {string} color - The color of the cat.
 * @param {string} breed - The breed of the cat.
 * @param {number} meowVolume - The volume of the cat's meow sound.
 */
class Cat extends Animal {
    constructor(name, age, species, color, breed, meowVolume) {
        super(name, age, species, color, breed);
        this.meowVolume = meowVolume;
    }

    /**
     * Displays a message indicating that the cat is meowing at a specific volume.
     *
     * @method meow
     * @memberof Cat
     * @returns {void}
     */
    meow() {
        console.log(`${this.name} is meowing at a volume of ${this.meowVolume}`);
    }
}