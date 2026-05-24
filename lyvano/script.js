const elements = document.querySelectorAll(".fade-in");

function showOnScroll() {
    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const trigger = window.innerHeight - 100;

        if (top < trigger) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});