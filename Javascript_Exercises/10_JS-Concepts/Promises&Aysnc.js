// Explanation : Promises handle asynchronous operations in JavaScript.
//Async/await makes promise code look synchronous.
// Esssential for API calls and handling delayed operations.

fetch('https://api.example.com/data')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }   
        return response.json();
    })
    .then(data => {
        console.log('Data fetched successfully:', data);
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });
console.log("***************Another Example*********************");

async function getData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
}

//Explanation of Promises and Async/Await in JavaScript
// Promises are used to handle asynchronous operations in JavaScript.
// A Promise represents a value that may be available now, or in the future, or never.