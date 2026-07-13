
// A Clouser is a when a function "remembers" variable from its outer scope, even after that outer function has finished executing.
// Enables data privacy and function factories.

function createCounter() {
    let count = 0;
    return function() {
        count ++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3

// Explanation : A Closure is created when the inner function is returned from createCounter.
// The inner function retains access to the count variable even after createCounter has finished executing.
// Each time counter() is called, it increments and returns the updated count value.
console.log("***************Another Example*********************");

