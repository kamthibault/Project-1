document.addEventListener("DOMContentLoaded"), () => {
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const commentsInput = document.getElementById("comments");
    const form = document.querySelector("form");
    const feedbackDisplay = document.getElementById("feedback-display");


// Character Count
const charCount = document.createElement("div");
commentsInput.parentNode.insertBefore (charCount, commentsInput.nextSibling);

commentsInput.addEventListener("input", () => {
    charCount.textContent = `Character count: ${commentsInput.value.length}`;
});
}

//Tooltip
const tooltips = {
    username: "Enter first & last name",
    email: "Enter email address",
    comments: "Share your honest feedback"
};
[usernameInput, emailInput, commentsInput].forEach(input => {
    input.addEventListener("mouseover", () => {
        const tip = document.createElement("span");
        tip.className = "tooltip";
        tip.textContent = tooltips [input.id];
        input.parentNode.appendChild(tip);
    });
    input.addEventListener("mouseout", () =>{
        const tip = input.parentNode.querySelector(".tooltip");
        if (tip) tip.remove();
    });
});

//Submission
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valid = true;

    [usernameInput, emailInput, commentsInput],forEach(input =>{
        const error = input.parentNode.querySelector(".error");
        if (error) error.remove();

        if (!input.value.trim()) {
            valid = false;
            const msg = document.createElement("div");
            msg.className = "error";
            msg.textContent = `${input.previousElementSibling.textContent} is required.`;
            input.parentNode.appendChild(msg);
        }
    });
         if (valid) {
        const entry = document.createElement("div");
        entry.className = "feedback Entry";
        entry.innerHTML = `
        <strong>${usernameInput.value}</strong> (${emailInput.value}) said:
        <br>
        <em>${commentsInput.value}</em>
        <hr>
        `;
        feedbackDisplay.appendChild (entry);
        form.reset();
        charCount.textContent = "";
    }
})
