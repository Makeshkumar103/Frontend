//'this' refers to the object that is executing the current function. Its value depends on how the function is called. 

const user = {  name: 'Alice',
  age: 30,
  greet: function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

user.greet(); // Output: Hello, my name is Alice and I am 30 years old
const greetFunc = user.greet;
greetFunc(); // Output: Hello, my name is undefined and I am undefined years old 

// Fix with bind()
const boundGreet = user.greet.bind(user);
boundGreet(); // Output: Hello, my name is Alice and I am 30 years old


// Explanation: In this example, 'this' refers to the 'user' object.