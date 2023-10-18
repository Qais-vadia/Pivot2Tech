/*
1. name input is empty do not pass
2. name is correct pass alert back to user
3. name meet length requirement
4. check is name is string
5. if errors point that out to user
6. if success point that out to user
*/

const body = document.body
const nameInput = document.getElementById("name")
const form = document.querySelector("form")
const lNameInput = document.getElementById("lname")
const emailInput = document.getElementById("Email")

function checkName(param){
    let res = false
    if(param.value.length>=2 && param.value.length<=20){
        res = stringRegex(param.value)
        success(param)
    }else{
        error(param, "does not meet required length")
    }   
    return res
}

function checklName(param){
    let res = false
    if(param.value.length>=2 && param.value.length<=20){
        res = stringRegex(param.value)
        success(param)
    }else{
        error(param, "does not meet required length")
    }
    return res
}

function success(param){
    param.style.borderBlockColor = "green"

}

function error(param, message){
    const outputMessage = document.querySelector("small")
    outputMessage.textContent = message
    param.style.borderBlockColor = "red"
    outputMessage.style.color = "red"
}

function stringRegex(param){
    const pattern = /^[a-zA-Z]+$/;
    return pattern.test(param)
}

function checkEmail(param){
    let res = false
    if (param.value.length>0){
        res = emailRegex(param.value)
    }
    return res
}

function emailRegex(param){
    const pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(param)
}

form.addEventListener("submit" ,function(e){
    e.preventDefault()

    var firstNameOutcome = checkName(nameInput)
    var lastNameOutcome = checklName(lNameInput)
    var emailOutcome = checkEmail(emailInput)

    if(firstNameOutcome && lastNameOutcome && emailOutcome){
        alert("form passes")
    }else(
        alert("form fails")
    )
})
