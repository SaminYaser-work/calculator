const button = document.getElementsByClassName("button-container");

[...button].forEach(element => {
    element.addEventListener('click', () => {
        console.log("Le click");
    })
});