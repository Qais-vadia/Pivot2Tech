let array = ["bread", "milk", "cheese", "butter", "apple", "bananas", "oranges", "broccoli", "cabbage", "cauliflower", "spices", "flour", "sugar", "salt", "pepper"]

console.log(array);
console.log

array.pop(array);
console.log(array);
console.log("after pop this array has", array.length, "items" )

array.push("seasalt");
console.log(array)
console.log("after push this array has", array.length, "items")

firstitem = array[0];
console.log("the first item is", firstitem)

middleitem = array[(array.length-1)/2];
console.log("the middle item is", middleitem)

lastitem = array[14];
console.log("the last item is", lastitem)

array[2] = "buns"
array[3] = "parmesan"
array[5] = "lemon"

console.log(array);


var name = "Qais"
var age = 22
var jobtitle = "Radiographer"
var DOB = "24/07/2000"
var location = "Bolton"

console.log("My name is", name,"i am", age,"years old. I was born on", DOB, "and i live in", location ,". I currently work as a", jobtitle)

array.splice(2, 1)
array.splice(4, 1)
console.log(array)


array.shift(0)
console.log(array)

array.unshift("loaf")
console.log(array)
