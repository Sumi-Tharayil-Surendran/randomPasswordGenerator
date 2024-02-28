 function generatePass(){
    let words=['sumi','tharayil'];
    let numbers=[0,1,2,3,4,5,6,7,8,9]
    let symbols=["!","@","?","#","$","%","&","*",":"]
    let sentence = words[Math.floor(Math.random() *words.length)]
    let randomNum1 = numbers[Math.floor(Math.random() * numbers.length)]
    let randomNum2 = numbers[Math.floor(Math.random() * numbers.length)]
    let symbol1 = symbols[Math.floor(Math.random() *symbols.length)]
    let symbol2 = symbols[Math.floor(Math.random() *symbols.length)]
    console.log(sentence)
    console.log(randomNum1)
    console.log(randomNum2)
    console.log(symbol1)
    console.log(symbol2)
 }
 generatePass()