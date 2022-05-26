//aqui é a criação da variavel e atribuiçao de valor
var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0

// aqui é a funçao onde ocorre a adiçao de valor
function increment() {
  currentNumber = currentNumber + 1
  currentNumberWrapper.innerHTML = currentNumber
}

//aqui é a funçao  onde ocorre a subtraçao de valor
function decrement() {
  currentNumber = currentNumber - 1
  currentNumberWrapper.innerHTML = currentNumber
}
