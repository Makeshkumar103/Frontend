function count(string) {
    let consonants = string.match(/[bcdfghjklmnpqrstvxyz]/ig);
    let vowels = string.match(/ [aeiou] /ig);
    return `Vowels:${vowels.length}, Consonants:${consonants.length}`;
}

console.log(count('Ganesh205'));
