 function generatePass(){
    let words=['sumi','tharayil','layali','neethu','rohini','fajar'];
    let numbers=[0,1,2,3,4,5,6,7,8,9]
    let symbols=["!","@","?","#","$","%","&","*",":"]
    let sentence = words[Math.floor(Math.random() *words.length)]
    let randomNum1 = numbers[Math.floor(Math.random() * numbers.length)]
    let randomNum2 = numbers[Math.floor(Math.random() * numbers.length)]
    let symbol1 = symbols[Math.floor(Math.random() *symbols.length)]
    let symbol2 = symbols[Math.floor(Math.random() *symbols.length)]
    // console.log(sentence)
    // console.log(randomNum1)
    // console.log(randomNum2)
    // console.log(symbol1)
    // console.log(symbol2)
    let txt = document.getElementById("txt");
    txt.value = `${sentence}${randomNum1}${randomNum2}${symbol1}${symbol2}`;
 }
//  generatePass()
 function copytoClip(){
    let copy = document.getElementById("txt");
    copy.select();
    copy.setSelectionRange(0,9999)
    navigator.clipboard.writeText(copy.value);
    alert(copy.value)
    
 }