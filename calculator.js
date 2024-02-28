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

function operate(operator,first_num,second_num){
    dict = {
        "+": add,
        "-": subtract,
        "*": multiply,
        "/": divide
    }
    return (dict[operator](first_num,second_num))
}

function arrayToInt(array){
    return Number(array.join(''))
}

function checkDuplication(notANum, array){
    for (i = 0; i < notANum.length; i++) {
        if (array[array.length -1] == notANum[i]){
            return true
        }
    }
    return false
}

console.log(checkDuplication(['+','-','.'], [6,8,7,'.',6,'+']))


function checkExist(notANum,array){
    for (i = 0; i < array.length; i++ ) {
        for (j = 0; j < notANum.length; j++) {
            if (arr[i] == notANum[j]) {
                return true
            }
        }      
    }
    return false
}

function count(x,array){ 
    return array.filter((current_item) => current_item == x).length
}


function calcu(array){
    const i = array.lastIndexOf('+') + array.lastIndexOf('-') + array.lastIndexOf('*') + array.lastIndexOf('/') + 3
    const num1 = arrayToInt(array.slice(0,i))
    const operator = array[i]
    const num2 = arrayToInt(array.slice(i+1))

    return operate(operator,num1,num2)
}



function arraySplit(array){
    for (let i = 0; i < array.length; i++){
        array[i] = array[i].toString()
        if (array[i].length > 1) {
            array_left = array.slice(0,i)
            new_array = array[i].split('')
            array_right = array.slice(i+1)

            array = array_left.concat(new_array,array_right)
        }
    }
    return array
}


function printOnDisplay(array){
    display.textContent = array.join('')
    return
}

let num_operator = null
let arr = []

const display = document.createElement('div')
display.classList.add('display')
const parentNode = document.querySelector('.display-container')
display.textContent = ''
parentNode.appendChild(display)


const nums = document.querySelectorAll('#num')
nums.forEach((num) => {
    num.addEventListener('click', function (e){
        current_value = e.target.value
        if (current_value != '.' ){
            arr.push(current_value)
        }else if (current_value == '.' && !checkExist(['.'],arr)){
            arr.push(current_value)
        }else if (current_value == '.' && checkExist(['.'],arr) && checkExist(['+','-','*','/'],arr)) {
            if (count('.',arr) < 2) {
                arr.push(current_value)
            }
        } 
        console.log(arr)
        printOnDisplay(arr)
          
    })
})

const operators = document.querySelectorAll('#operator')
operators.forEach((operator) => {
    operator.addEventListener('click', function (e){
        if (checkDuplication(['+','-','*','/'], arr)){
            num_operator = e.target.value
            arr[arr.length -1] = num_operator
        } else {
            if (num_operator == null) {
                num_operator = e.target.value
                arr.push(e.target.value)
            } else {
                const result = calcu(arr)
                arr = [result, e.target.value]
            }
        }
        
        printOnDisplay(arr)
    })
})

const equal = document.querySelector('#equal')
equal.addEventListener('click', () => {
    if(arr.length != 0){
        const result = calcu(arr)
        arr = [result]
        
        printOnDisplay(arr)
        num_operator = null
        console.log(arr,num_operator)
    }
    
})

const dele = document.querySelector('#delete')
dele.addEventListener('click',() => {
    if (arr.length > 1){
        if (checkDuplication(['+','-','*','/'], arr)){
            num_operator = null
        }
        arr.pop()
        printOnDisplay(arr)
        temp = arrayToInt(arr)
        if(!isNaN(temp)){
            arr = [temp]
        }
    }
})

const clear = document.querySelector('#clear')
clear.addEventListener('click',() => {
    arr = []
    num_operator = null
    printOnDisplay(arr)
})





