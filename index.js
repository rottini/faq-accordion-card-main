
document.querySelectorAll(".collapse_button").forEach(button => {
    button.addEventListener("click", () => {
        const collapseContent = button.nextElementSibling;

        button.classList.toggle("collapse_button--active");

        if (button.classList.contains("collapse_button--active")) {
            collapseContent.style.maxHeight = collapseContent.scrollHeight + "px";
            button.style.fontWeight = "bolder";
        } else {
            collapseContent.style.maxHeight = 0;
            button.style.fontWeight = "normal";
        }

    });
});
