var day = "TUESDAY"

if(day.toLowerCase()==="tuesday"){
    console.log("Thats a day of the week")
}else{
    console.log("Day not recognised")
}

var phone = "samsung".toLowerCase()

if(typeof phone === "string"){
    if(phone === "iphone"){
        console.log("phone is an iPhone")
    }else{
        console.log("phone must be an android")
    }
}   

var num1 = 10
var num2 = 250  
var operation = "addition"

if (typeof operation === "string"){
    switch(operation){
        case "addition":
            console.log(num1+num2)
            break;
        case "subtraction":
            console.log(num1-num2)
            break;
        case "multiplication":
            console.log(num1*num2)
            break;
        case "division":
            console.log(num1/num2)
            break;
        default:
            console.log("DO NOT RECOGNISE")
            break;
    }
}





