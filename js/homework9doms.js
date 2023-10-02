const body = document.body
const head = document.head
const date1 = document.querySelector("h3");
const h4 = document.createElement("h4");
const orderedList = document.createElement("ol");
const listItems = document.createElement("li");
const listItems2 = document.createElement("li");
const listItems3 = document.createElement("li");
const btn = document.createElement("button");

body.style.backgroundColor = "coral";

title.innerText = "Homework 1 is all about DOMS"

const className = document.getElementsByClassName("dom")
className.innerText = "my name is qais"
    for (var i = 0; i < className.length; i++) {
      className[i].textContent = "My Name is Qais";
    }

h4.innerText = "Coding languages i am currently learning"
const date = new Date()
console.log(date.getMonth()+1)
date1.innerText = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`

orderedList.append(h4)
listItems.innerText = "HTML"
orderedList.append(listItems)
listItems2.innerText = "JS"
orderedList.append(listItems2)
listItems3.innerText = "CSS"
orderedList.append(listItems3)

body.append(orderedList)
body.append(btn)


btn.innerText = "Click me!"