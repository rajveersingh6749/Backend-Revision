// Fundamentals of JavaScript
// arrays and objects
// function return
// asynchronous programming
// and many more...


let arr = [1, 2, 3, 4, 5];

// forEach, map, filter, indexOf, find
arr.forEach(function(val) {
    console.log(val + " Hello");
})

let ans = arr.map(function(val){
    return 13;
})

console.log(ans);

let ans2 = arr.map(function(val){
    return val * 2;
})
console.log(ans2);

let ans3 = arr.filter(function(val){
    return val > 2;
})
console.log(ans3);

let arr2 = [1, 2, 2, 3, 4];

let ans4 = arr2.find(function(val){
    if(val === 2) {
        return val;
    }
})
console.log(ans4); // it will return the first occurrence of 2

let ans5 = arr2.indexOf(2);
console.log(ans5); // it will return the index of the first occurrence of 2

let ans6 = arr2.indexOf(16);
console.log(ans6); // it will return -1 since 5 is not in the array


// Objects

let obj = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log(obj.name); // Accessing object properties
console.log(obj['age']); // Accessing object properties using bracket notation  

obj.mail = "777rajveersingh@gmail.com"; // Adding a new property
console.log(obj);
console.log(obj.mail); // Accessing the newly added property

obj.city = "Mumbai"; // Modifying an existing property
console.log(obj);   

Object.freeze(obj); // Freezing the object to prevent further modifications
obj.city = "L.A"; // This will not work since the object is frozen
console.log(obj);

// Function return
function add(a, b) {
    return a + b; // Returning the sum of a and b
}

console.log(add.length); // Output: 2 (number of parameters)


let sum = add(5, 10); // Calling the function and storing the result
console.log(sum); // Output: 15 (the result of the addition)

// Asynchronous programming

async function abcd(){
    let blob = await fetch(); // the data that comes from the fetch is a promise, so we need to await it and its's type is a blob meaning is not in readable format
    
    blob = await blob.json();
}
// code tends to run line by line in javaSript, but if there is some asynchronous code, this code is brought to side stack to process and syncronous code continues to run and when the asynchronous code is done, it is brought back to the main stack to continue execution.