const rating_buttons = document.querySelectorAll(".circle");
const submit_button = document.querySelector(".sub");
const rate_value = document.getElementById("rate");
const rating_card = document.querySelector(".content");
const thanks_card = document.querySelector(".thanks_section");

let rate = null;

rating_buttons.forEach((rating_buttons) => {
    rating_buttons.addEventListener("click", (e) => {
        const active = document.querySelector(".checked");

        if (active) {
            active.classList.remove("checked");
        }
         
        const card = e.target;
        card.classList.add("checked");
        rate = e.target.innerText;
        console.log(rate);
    });
});

submit_button.addEventListener("click", () => {
    if (rate) {
        rate_value.innerText = rate;
        rating_card.classList.add("hidden");
        thanks_card.classList.remove("hidden");
    }
});