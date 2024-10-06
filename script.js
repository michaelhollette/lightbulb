// Write your code here

const bulbs = document.querySelectorAll(".lightbulb");
let counter = document.querySelector("h3");
let count = 0;

for (bulb of bulbs){
    bulb.addEventListener("click", function(){
        this.classList.toggle("active")
        count ++
        if (count == 1){            
            counter.innerHTML =  `You've clicked the light ${count} time`
        }else{
            counter.innerHTML =  `You've clicked the light ${count} times`
        }
    })
}


