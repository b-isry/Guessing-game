const form = document.getElementById("form")
let numIn = document.getElementById("numIn")
var p1 = document.getElementById("winAnimationP")

let getNum = Math.floor(Math.random()*15)+1;
console.log(getNum)

let lives = 3;

form.addEventListener('submit', (e)=>
{
    e.preventDefault()
    if (lives > 0){
        if(numIn.value==getNum){
        e.preventDefault()
        p1.textContent = "You Won!"
        }   
     else if(numIn.value < getNum){
        e.preventDefault()
        p1.textContent = ("Oops you lost! Try a number greater than "+numIn.value + ".")
        lives--;
}
    else if(numIn.value > getNum){
        e.preventDefault()
        p1.textContent = `Oops you lost!
                    Try a number less than ${numIn.value}.`
                    lives--;
                   
}
}
else{
    p1.textContent = "You lost! Try again later."
}
})

    



