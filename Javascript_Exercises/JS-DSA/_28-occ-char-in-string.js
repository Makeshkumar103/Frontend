
function occurrenceOfChar(str, char) {
    return str.split('').filter(c => c === char).length;
}
console.log(occurrenceOfChar("hello world", "o")); // Output: 2


// Another way to do this
function occurrenceOfChar1(str, char) {
    return (str.match(char)).length;
}
console.log(occurrenceOfChar1("hello world", "o")); // Output: 2
function occurrenceOfChar2(str, char) {
    let count = 0;  
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }   
    }
    return count;
}
console.log(occurrenceOfChar2("hello world", "o")); // Output: 2

// Another way to do this using regex
function occurrenceOfChar3(str, char) {
    let regex = new RegExp(char, 'g');
    let matches = str.match(regex);
    return matches ? matches.length : 0;
}

console.log(occurrenceOfChar3("hello world", "o")); // Output: 2

// Another way to do this using reduce
function occurrenceOfChar4(str, char) {
    return str.split('').reduce((count, c) => (c === char ? count + 1 : count), 0);
}   
console.log(occurrenceOfChar4("hello world", "o")); // Output: 2

// Another way to do this using for..of loop
function occurrenceOfChar5(str, char) {
    let count = 0;
    for (const c of str) {
        if (c === char) {
            count++;
        }   
    }
    return count;
}
console.log(occurrenceOfChar5("hello world", "o")); // Output: 2

// Another way to do this using while loop
function occurrenceOfChar6(str, char) {
    let count = 0;
    let i = 0;
    while (i < str.length) {
        if (str[i] === char) {
            count++;
        }   
        i++;
    }
    return count;
}
console.log(occurrenceOfChar6("hello world", "o")); // Output: 2
// Another way to do this using map
function occurrenceOfChar7(str, char) {
    let count = 0;
    str.split('').map(c => {
        if (c === char) {
            count++;
        }
    });
    return count;
}
console.log(occurrenceOfChar7("hello world", "o")); // Output: 2

// Another way to do this using forEach
function occurrenceOfChar8(str, char) {
    let count = 0;  
    str.split('').forEach(c => {
        if (c === char) {
            count++;
        }
    });
    return count;
}

console.log(occurrenceOfChar8("hello world", "o")); // Output: 2

// Another way to do this using indexOf
function occurrenceOfChar9(str, char) {
    let count = 0;
    let index = str.indexOf(char);
    while (index !== -1) {
        count++;
        index = str.indexOf(char, index + 1);
    }   
    return count;
}
console.log(occurrenceOfChar9("hello world", "o")); // Output: 2
// Another way to do this using split and length difference
function occurrenceOfChar10(str, char) {
    return str.split(char).length - 1;
}
console.log(occurrenceOfChar10("hello world", "o")); // Output: 2
// Another way to do this using matchAll
function occurrenceOfChar11(str, char) {
    let regex = new RegExp(char, 'g');
    let matches = str.matchAll(regex);
    return Array.from(matches).length;
}
console.log(occurrenceOfChar11("hello world", "o")); // Output: 2