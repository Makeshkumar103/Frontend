function anagramCheck(str1,str2) {
    let word1 = str1.replace(/\s/g,'').toLowerCase().split('').sort().join('');
    let word2 = str2.replace(/\s/g,'').toLowerCase().split('').sort().join('');
    return (word1 == word2) ? "Yes it is" : "No it is not";
}

console.log(anagramCheck("sI l ent","listen")); // Output : yes it is