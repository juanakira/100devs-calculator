const screen = document.getElementById('screen')


const numbers = ['zero', 'one','two','three','four','five','six','seven','eight','nine']

const numberElements = numbers.map( number => document.getElementById(number))


document.getElementById('one').addEventListener('click', one)

function one (){
        
    if (screen.value.length < 11) {
        screen.value += `${numbers.indexOf(numberLiteral)}`
    }
    
}

console.log(numberElements)



