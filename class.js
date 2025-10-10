// Sure! Here are **5 exercises** that will help you practice JavaScript `classes`, `super`, `extends`, and `static`.

// ---

// ### 🏋️‍♀️ **Exercise 1: Basic Inheritance with `extends` and `super`**

// **Objective:** Create a `Person` class, then extend it to create an `Employee` class. Use `super` to call the parent class constructor.

// **Instructions:**

// 1. Create a `Person` class with the properties `name` and `age`.
// 2. Create an `Employee` class that extends `Person` and adds a new property `jobTitle`.
// 3. In the `Employee` class, use `super` to call the `Person` class constructor and pass the `name` and `age` to it.

// **Solution template:**

// ```javascript
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   sayHello() {
//     console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old.`);
//   }
// }

// class Employee extends Person {
//   constructor(name, age, jobTitle) {
//     super(name, age);
//     this.jobTitle = jobTitle;
//   }

//   describeJob() {
//     console.log(`I am a ${this.jobTitle}.`);
//   }
// }

// const emp = new Employee('Alice', 30, 'Software Engineer');
// emp.sayHello();  // Hello, my name is Alice, and I am 30 years old.
// emp.describeJob();  // I am a Software Engineer.
// ```

// ---

// ### 🏗 **Exercise 2: `static` Methods in Classes**

// **Objective:** Create a `Car` class with a static method that tracks the total number of cars created.

// **Instructions:**

// 1. Create a `Car` class with the properties `make` and `model`.
// 2. Add a static method `countCars()` that returns the total number of `Car` instances created.
// 3. Use a static property to keep track of the count.

// **Solution template:**

// ```javascript
// class Car {
//   static totalCars = 0;

//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//     Car.totalCars++;  // Increment the static counter when a new car is created
//   }

//   static countCars() {
//     console.log(`Total cars created: ${Car.totalCars}`);
//   }
// }

// const car1 = new Car('Toyota', 'Corolla');
// const car2 = new Car('Honda', 'Civic');
// Car.countCars();  // Total cars created: 2
// ```

// ---

// ### 🛠 **Exercise 3: Super with `extends` for Method Overriding**

// **Objective:** Create a `Shape` class with a method `area`, and then extend it to create a `Rectangle` class that overrides the `area` method.

// **Instructions:**

// 1. Create a `Shape` class with an `area()` method that returns `0`.
// 2. Create a `Rectangle` class that extends `Shape` and overrides the `area()` method to return the area of a rectangle (`width * height`).
// 3. In the `Rectangle` constructor, use `super` to call the parent class constructor.

// **Solution template:**

// ```javascript
// class Shape {
//   area() {
//     return 0;
//   }
// }

// class Rectangle extends Shape {
//   constructor(width, height) {
//     super();
//     this.width = width;
//     this.height = height;
//   }

//   area() {
//     return this.width * this.height;
//   }
// }

// const rect = new Rectangle(5, 10);
// console.log(rect.area());  // 50
// ```

// ---

// ### 🔥 **Exercise 4: `static` Property for Class-Level Data**

// **Objective:** Create a `BankAccount` class with a `static` property that tracks the total number of accounts created.

// **Instructions:**

// 1. Create a `BankAccount` class with properties `owner` and `balance`.
// 2. Add a static property `totalAccounts` to keep track of the number of `BankAccount` instances created.
// 3. Each time a new `BankAccount` is created, increment `totalAccounts`.
// 4. Create a method `getTotalAccounts()` to return the total number of accounts.

// **Solution template:**

// ```javascript
// class BankAccount {
//   static totalAccounts = 0;

//   constructor(owner, balance) {
//     this.owner = owner;
//     this.balance = balance;
//     BankAccount.totalAccounts++;
//   }

//   static getTotalAccounts() {
//     console.log(`Total bank accounts: ${BankAccount.totalAccounts}`);
//   }

//   deposit(amount) {
//     this.balance += amount;
//   }

//   withdraw(amount) {
//     this.balance -= amount;
//   }
// }

// const account1 = new BankAccount('John', 1000);
// const account2 = new BankAccount('Jane', 1500);

// BankAccount.getTotalAccounts();  // Total bank accounts: 2
// ```

// ---

// ### 🔄 **Exercise 5: Combining `static`, `extends`, and `super`**

// **Objective:** Create a `Product` class, then extend it to create a `DiscountedProduct` class that calculates a discounted price. Use a static method to apply a global discount to all products.

// **Instructions:**

// 1. Create a `Product` class with the properties `name` and `price`.
// 2. Create a `DiscountedProduct` class that extends `Product` and adds a `discountPercentage` property.
// 3. Override the `price` method to return the price after the discount.
// 4. Add a static method `applyGlobalDiscount` in the `Product` class that applies a global discount to all products.

// **Solution template:**

// ```javascript
// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

//   getPrice() {
//     return this.price;
//   }

//   static applyGlobalDiscount(globalDiscount) {
//     Product.globalDiscount = globalDiscount;
//     console.log(`Applied global discount of ${globalDiscount}% to all products.`);
//   }
// }

// class DiscountedProduct extends Product {
//   constructor(name, price, discountPercentage) {
//     super(name, price);
//     this.discountPercentage = discountPercentage;
//   }

//   getPrice() {
//     const discountedPrice = this.price * (1 - this.discountPercentage / 100);
//     if (Product.globalDiscount) {
//       return discountedPrice * (1 - Product.globalDiscount / 100);
//     }
//     return discountedPrice;
//   }
// }

// Product.applyGlobalDiscount(10);  // Global 10% discount

// const prod1 = new DiscountedProduct('Laptop', 1000, 20);
// const prod2 = new DiscountedProduct('Phone', 500, 15);

// console.log(prod1.getPrice());  // 720 (20% discount + 10% global discount)
// console.log(prod2.getPrice());  // 382.5 (15% discount + 10% global discount)
// ```

// ---

// ### 🏆 **Summary of Concepts Covered:**

// * **`extends`**: Used to create a subclass that inherits methods and properties from a parent class.
// * **`super`**: Used in the subclass to call methods or the constructor of the parent class.
// * **`static`**: Used to define methods or properties that belong to the class itself (not instances of the class).

// Feel free to experiment with these exercises and tweak them to deepen your understanding of JavaScript classes. Let me know if you need any further explanations!
