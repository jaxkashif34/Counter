// Button JS

var animateButton = function (e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function () {
        e.target.classList.remove('animate');
    }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
}

// Counter JS

$(document).ready(function () {
    const numbers = document.querySelector("#numbers");
    const add = document.querySelector("#add");
    const lower = document.querySelector("#lower");
    let count = 0;
    if (count === 0) {
        numbers.style.color = "black";
    }
    lower.addEventListener("click", () => {
        count--;
        numbers.textContent = count;
        if (count < 0) {
            numbers.style.color = "red";
        } else if (count === 0) {
            numbers.style.color = "Grey"
        }
    })
    add.addEventListener("click", () => {
        count++;
        numbers.textContent = count;
        if (count > 0) {
            numbers.style.color = "green";
        } else if (count === 0) {
            numbers.style.color = "Grey"
        }
    })
    function color() {
        numbers.style.color = "grey"
    }

    color();
});
