document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".dynamic-elements");


    for (let i = 0; i < 50; i++) {
        const element = document.createElement("div");
        element.classList.add("dynamic-element");
        element.style.top = `${Math.random() * 100}vh`;
        element.style.left = `${Math.random() * 100}vw`;
        element.style.animationDuration = `${3 + Math.random() * 3}s`;
        element.style.animationDelay = `${Math.random()}s`;
        container.appendChild(element);
    }
});