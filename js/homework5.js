/*Fizzbuzz task (medium)

Using a loop, print numbers from 1 to 100 but here’s the catch, multiple of 3 should print “Fizz” and multiples of 5 should print “Buzz”. Lastly print “FizzBuzz” for multiples of three and five.

example below (screenshot contains from 1-15) question is to continue to 100*/

for (let i=1; i<=100; i++){
    if(i%15==0){
        console.log("fizzbuzz")
    }else if(i%3==0){
        console.log("fizz")
    }else if(i%5==0){
        console.log("buzz")
    }else{
        console.log(i)
    }
}

/*Take the following phrase and translate it to a different word depending on vowels shown.
phrase “turpentine and turtles” 
word equivalent "UUEEIEEAUUEE”*/



var input = "turpentine and turtles"
var array = []

for(let i=0;i<input.length; i++){
    if(input[i] === "u" ||input[i] === "e"){
        array.push(input[i])
        array.push(input[i])
    }else if(input[i] === "i" ||input[i] === "a"){
        array.push(input[i])
    }
}
word = "UUEEIEEAUUEE"
console.log(array.join('').toUpperCase() === "UUEEIEEAUUEE")

console.log(`phrase is equal to ${input}`)
console.log(`word is equal to ${word}`)