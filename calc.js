const operators = require('./calcFunctions.js') 
const rl = require('readline-sync')

let val = askOperator()

// CHECK IF ONE OF THE CHOICE IS A SUPPORTED ONE
function checkChoice(value) {
    if (value == 'add' || value == 'subtract' || value == 'multiply' || value == 'divide') {
        console.log('You choose ' + value)
        return result = 'OK'
    }
    else {
        return
    }
}


// CALC FUNCTION - ASKS FOR OPERATION AND IF THE OPERATION IS A SUPPORTED ONE, ASKS FOR NUMBERS.
function askOperator() {
    var rawChoice = rl.question('What operation you want to execute? (add, subtract, multiply, divide): ' )
    var val = rawChoice.toLowerCase()
    var checkres = checkChoice(val)
if (checkres == 'OK') {
    var a = parseInt(rl.question('First number: ' ))
    var b = parseInt(rl.question('Second number: '))

    switch (val) {
        case 'add':
            return console.log(a + ' + ' + b + ' = ' + operators.add(a,b));
               
        case 'subtract':
            return console.log(a + ' - ' + b + ' = ' + operators.subtract(a,b));
    
        case 'multiply':
            return  console.log(a + ' * ' + b + ' = ' + operators.multiply(a,b));
    
        case 'divide':
            return  console.log(a + ' / ' + b + ' = ' + operators.divide(a,b));   
        default:
            break;
    }

    return
} else {
    console.log('Sorry, retry.')
    try {
        askOperator()
            }
    catch {
        console.log('Too many retries')

    }
}
    
    }
    