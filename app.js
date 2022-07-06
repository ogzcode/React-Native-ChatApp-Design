const textInput = document.querySelector("#text");
const fontSizeInput = document.querySelector("#font-size");
const textColorInput = document.querySelector("#text-color");

const widthInput = document.querySelector("#width");
const heightInput = document.querySelector("#height");

const radiusInput = document.querySelector("#radius");
const bgColorInput = document.querySelector("#bg-color");
const borderInput = document.querySelector("#border");

const button = document.querySelector("#button");

const widthOldValue = {old: 0};
const heightOldValue = {old: 0};
const radiusOldValue = {old: 0};

function reset(){
    textInput.value = "";
    fontSizeInput.value = "";
    textColorInput.value = "#000";

    widthInput.value = widthInput.min;
    heightInput.value = heightInput.min;

    radiusInput.value = radiusInput.min;
    bgColorInput.value = "#000";
    borderInput.checked = false;
}

function changeStyleWithRange(nodeValue, realNodeValue, oldValue){
    let result = 0;

    if (nodeValue < oldValue.old) {
        nodeValue *= -1;
        result = realNodeValue - (nodeValue + oldValue.old);
    }
    else {
        oldValue.old *= -1;
        result = realNodeValue + (nodeValue + oldValue.old);
    }
    oldValue.old = Math.abs(nodeValue);

    return result;
}



textInput.addEventListener("input", () => {
    button.innerText = textInput.value;
    if (textInput.value === ""){
        button.innerText = "Text";
    }
});

fontSizeInput.addEventListener("input", () => {
    button.style.fontSize = `${fontSizeInput.value}px`;
    if (fontSizeInput.value < 10){
        button.style.fontSize = `10px`;
    }
    else if (fontSizeInput.value > 64){
        button.style.fontSize = `64px`
    }
});

textColorInput.addEventListener("change", () => {
    button.style.color = textColorInput.value;
});




widthInput.addEventListener("input" , () => {
    let result = changeStyleWithRange(parseInt(widthInput.value), parseInt(window.getComputedStyle(button).width),
    widthOldValue);
    button.style.width = `${result}px`;
});

heightInput.addEventListener("input", () => {
    let result = changeStyleWithRange(parseInt(heightInput.value), parseInt(window.getComputedStyle(button).height),
    heightOldValue);
    button.style.height = `${result}px`;
});




radiusInput.addEventListener("input", () => {
    let result = changeStyleWithRange(parseInt(radiusInput.value), parseInt(window.getComputedStyle(button).borderRadius),
    radiusOldValue);
    button.style.borderRadius = `${result}px`;
});

bgColorInput.addEventListener("change", () => {
    button.style.backgroundColor = bgColorInput.value;
});

borderInput.addEventListener("change", () => {
    if (borderInput.checked == true){
        button.style.border = "1px solid gray";
    }
    else {
        button.style.border = "none";
    }
});

reset();

