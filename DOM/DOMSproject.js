const btn = document.getElementById("btn");
const input = document.querySelector("input");
const cards = document.querySelectorAll(".cards");
const container = document.getElementById("container");

btn.addEventListener("click", function (e) {

    const userInput = input.value.trim(stringRegex).toLowerCase();
    let foundMovie = false;

    if (userInput.length === 0) {
        alert("Please enter a movie title.");
    } else {
        for (const card of cards) {
            const title = card.querySelector("h1").textContent.toLowerCase();
            if (title === userInput) {
                foundMovie = card;
                break;
            }
        }

        if (foundMovie) {
            for (const card of cards) {
                if (card === foundMovie) {
                    card.classList.remove("dontDisplay");
                } else {
                    card.classList.add("dontDisplay");
                }
            }
        } else {
            alert("Movie not found");
            location.reload();
        }
    }
});

function stringRegex(param){
    const pattern = /^[a-zA-Z]+$/;
    return pattern.test(param)

}
