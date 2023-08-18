//ideal hours = 8

const getSleepHours = (day) => {
    if(day === 'monday'){
        return; 8
    }else if(day === 'tuesday'){
        return; 7
    }else if(day === 'wednesday'){
        return; 8
    }else if(day === 'thursday'){
        return; 7
    }else if(day === 'friday'){
        return; 9
    }else if(day === 'saturday'){
        return; 5
    }else if(day === 'sunday'){
        return; 10
    }else {
        return; 'error';

    }
}


function farenheit(num){
    return num
}

function farenheitToKelvin(num){
    var converter = farenheit(num)
    var kelvin = (converter-32)*5/9+273.15
    console.log(kelvin)
}

farenheitToKelvin(91)


var word = "qais"
var reverseWord = []

for (let i=word.length-1; i>=0; i--){
    reverseWord += word[i]
}

console.log(reverseWord)

if(word === reverseWord){
    console.log(`${word} is a palindrome`)
}else{
    console.log(`${word} is not a palindrome`)
}

