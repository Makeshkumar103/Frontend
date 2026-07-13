// implementing a simple calculator

function calculator(a,b,sign) {
    if((typeof a === 'number') && (typeof b === 'number'))
    {
        switch(sign) {
        case"+":
            return a + b;
        case "-":
            return a-b;
        case "*":
            return a*b;
        case "/":
            return (b!=0) ? a/b:"can't divide by zero";
        }
    }
return "unkown value";
}

console.log(calculator(3,5,"*"))