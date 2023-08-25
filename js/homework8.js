/* supposedly we have a list of numbers [1,2,3,45,90,125,2001,1001]

identify and print the largest number in the array. e.g example above 2001 should be the answer*/

//array containing 1,2,3,45,90,125,2001,1001

const numberArray = [1,2,3,45,90,125,2001,1001]
const highest = Math.max(...numberArray)

//console.log("the highest number is " + highest)


/*lets say we have a word “thequickbrownfoxjumsoverthelazydog” remove every character that appears more than once (will need to search for a method in js that checks if a string holds the same character already). so the answer should reveal “thequickbrownfxjmpsvlazydg”*/

var word1 = "thisissomethingthatcontainsnothing"
var word2 = []
    
    for(let i=0; i<word1.split('').length; i++){
        if(!word2.includes(word1.split(''))[i]){
            word2.push(word1.split('')[i])
        }
    }
}
   console.log(word2.join(''))


