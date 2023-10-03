const btn = document.querySelector("button")
const body = document.body


var array = ["blue","pink","green","red","purple"]


function changeColour(e){
    var generator = Math.floor(Math.random()*5)
    console.log(array[generator])
    body.style.backgroundColor = array[generator]
}

btn.addEventListener("click", changeColour)
