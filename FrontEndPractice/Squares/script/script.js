
function changeColor(element) {
    let squareElementId = 'square';
    let squareElement = document.getElementById(squareElementId);

    let color = getComputedStyle(element).backgroundColor;
    squareElement.style.backgroundColor = color;
}