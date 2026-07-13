function removeDuplicates(arr) {
    return [...new Set(arr)];
}
const array = [1,2,3,3,4,5,5,6];
console.log(removeDuplicates(array)); // Output: [1, 2, 3, 4, 5, 6]

console.log("****Another Method****");

function removeDuplicatesUsingFilter(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}   
const array1 = [1,2,3,3,4,5,5,6];
console.log(removeDuplicatesUsingFilter(array1)); // Output: [1, 2, 3, 4, 5, 6]

function removeDuplicate(arr) {
    return arr.filter((val, index, self) => self.indexOf(val) === index);
}
const array2 = [1,2,3,3,4,5,5,6,6,8,8,8];
console.log(removeDuplicate(array1));

console.log("****Another Method****");

function getDistinctElements(arr) {
    return arr.reduce((unique,item) => {
        return unique.includes(item) ? unique : [...unique, item];
    },[])
}
const array12 = [1,2,3,3,4,5,5,6,6,8,8,8];
console.log(getDistinctElements(array12)); // Output: [1, 2, 3, 4, 5, 6, 8]

console.log("****Another Method****");
function eliminateDuplicates(arr) {
    const uniqueElements = [];  
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueElements.includes(arr[i])) {
            uniqueElements.push(arr[i]);
        }

    }
    return uniqueElements;
}       
const array3 = [1,2,3,3,4,5,5,6,6,8,8,8];
console.log(eliminateDuplicates(array3)); // Output: [1, 2, 3, 4, 5, 6, 8]
console.log("****Another Method****");
function deduplicate(arr) {
    const seen = {};
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!seen[arr[i]]) {
            seen[arr[i]] = true;
            result.push(arr[i]);
        }
    }

    return result;
}
const array4 = [1,2,3,3,4,5,5,6,6,8,8,8];
console.log(deduplicate(array4)); // Output: [1, 2, 3, 4, 5, 6, 8]
console.log("****Another Method****");
function uniqueArray(arr) {
    const uniqueSet = new Set();
    arr.forEach(item => uniqueSet.add(item));
    return Array.from(uniqueSet);
}       
const array5 = [1,2,3,3,4,5,5,6,6,8,8,8];
console.log(uniqueArray(array5)); // Output: [1, 2, 3, 4, 5, 6, 8]
console.log("****Another Method****");
function getUniqueElements(arr) {
    const uniqueElements = [];      
    arr.forEach(item => {
        if (!uniqueElements.includes(item)) {
            uniqueElements.push(item);
        }
    });
    return uniqueElements;
}
const array6 = [1,2,3,3,4,5,5,6,6,8,8,8];
console.log(getUniqueElements(array6)); // Output: [1, 2, 3, 4, 5, 6, 8]
console.log("****Another Method****");
function filterDuplicates(arr) {
    return arr.reduce((acc, current) => {
        if (!acc.includes(current)) {
            acc.push(current);
        }
        return acc;
    }, []);     
}
const array7 = [1,2,3,3,4,5,5,6,6,8,8,8];
console.log(filterDuplicates(array7)); // Output: [1, 2, 3, 4, 5, 6, 8]
console.log("****Another Method****");
function distinctElements(arr) {
    const elementCount = {};
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!elementCount[arr[i]]) {
            elementCount[arr[i]] = 1;
            result.push(arr[i]);
        }
    }
    return result;
}
const array8 = [1,2,3,3,4,5,5,6,6,8,8,8];
console.log(distinctElements(array8)); // Output: [1, 2, 3, 4, 5, 6, 8]
console.log("****Another Method****");
function uniqueItems(arr) {
    const uniqueMap = new Map();
    arr.forEach(item => {
        if (!uniqueMap.has(item)) {
            uniqueMap.set(item, true);
        }
    });
    return Array.from(uniqueMap.keys());
}
const array9 = [1,2,3,3,4,5,5,6,6,8,8,8];
console.log(uniqueItems(array9)); // Output: [1, 2, 3, 4, 5, 6, 8]
console.log("****Another Method****");
function removeDupes(arr) {
    const seen = new Set();
    const result = [];
    for (const item of arr) {
        if (!seen.has(item)) {
            seen.add(item);
            result.push(item);
        }
    }       
    return result;
}


const array10 = [1,2,3,3,4,5,5,6,6,8,8,8];
console.log(removeDupes(array10)); // Output: [1, 2, 3, 4, 5, 6, 8]
console.log("****Another Method****");
function uniqueVals(arr) {
    const unique = {};      
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!unique[arr[i]]) {
            unique[arr[i]] = true;
            result.push(arr[i]);
        }
    }
    return result;
}
const array11 = [1,2,3,3,4,5,5,6,6,8,8,8];
console.log(uniqueVals(array11)); // Output: [1, 2, 3, 4, 5, 6, 8]  
console.log("****Another Method****");