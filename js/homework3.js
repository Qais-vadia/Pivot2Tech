
1
var hero = "spiderman"

if (hero === "spiderman"|| hero === "iron man" || hero === "thor"){
    console.log(`${hero} is a marvel character`)
}else if(hero === "superman"|| hero === "batman" || hero === "wonderwoman"){
    console.log(`${hero} is a dc character`)
}else{
    console.log(`DO NOT RECOGNISE`)
}

2
const age = 13

if (typeof age === "string"){
    console.log("error")
}else if(age >=11 && age <16){
    console.log("you are in secondary school")
}else if(age>=16 && age<18){
    console.log("you are in college")
}else if(age>18 && age<90){
    console.log("optional education")
}else if(age<11 && age>3){
    console.log("you are in primary school")
}else{
    console.log("error2")
}

3
var array = [1,2,3,4,5]

if (array.length>5 || array.length<5){
    console.log("error")
}else(
    console.log("List has 5 items")
)


4

const score = 43

if(score>80 && score<101){
    console.log("Congratulations! You have passed with Grade A")
}else if(score>70 && score<80){
    console.log("Congratulations! You have passed with Grade B")
}else if(score>60 && score<70){
    console.log("Congratulations! You have passed with Grade C")
}else if(score<60){
    console.log("Sorry, you have not passed this exam")
}else{
    console.log("ERROR!")
}