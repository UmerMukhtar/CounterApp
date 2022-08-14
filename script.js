const counter = document.getElementById("counter");
const decrement = document.getElementById("decrease");
const increment = document.getElementById("increase");
const reset = document.getElementById("reset");

let count = 0;

increment.addEventListener('click', () =>{
    count++;
    counter.innerHTML = count;
})

decrement.addEventListener('click', () =>{
    if(count>0){
        count--
        counter.innerHTML = count;
     }

})

reset.addEventListener('click', () =>{
    count = 0;
    counter.innerHTML = count;
})