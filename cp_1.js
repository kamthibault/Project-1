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