// convert decimel to binary

function convert(n) {
    let reminder=[]
    while(n>0){
        reminder.push(n%2);
        n=Math.floor(n/2);
    }
    return Number(reminder.reverse().join(''));
}

console.log(convert(13))