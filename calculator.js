function add(a, b) {
    const num = a + b;
    return num;
};
  
function subtract(a, b) {
    const num = a - b;
    return num;
};

function multiply (a, b) {
    const num = a * b
    return num
};

function divide (a, b) {
    const num = a / b
    return num
}

let first_num
let operator
let second_num

function operate(operator,first_num,second_num){
    dict = {
        "+": add,
        "-": subtract,
        "*": multiply,
        "/": divide
    }
    return (dict[operator](first_num,second_num))
}

console.log(operate('+',2,3))






// a = 3
// b = 4
// console.log(add(a,b))
// console.log(subtract(a, b))
// console.log(multiply (a, b))
// console.log(divide (a, b))