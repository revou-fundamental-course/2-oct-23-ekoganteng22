//script

const celciusfield = document.querySelector("#celsius");
const degree =  document.querySelector("#degree");
const  convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

//windows loading reset

window.addEventListener("load", () => {
    degree.value = "";
    celciusfield.innerHTML = "";
})


convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertToCelsius();
})

function convertToCelsius() {
    let inputValue = degree.value;

    if(tempType.value === "fahrenheit") {
        const fahrenheitToCelsius = (inputValue -32) * (5/9);
        celciusfield.innerHTML = `${fahrenheitToCelsius.toFixed(3)} &deg; c` ;
    }
}