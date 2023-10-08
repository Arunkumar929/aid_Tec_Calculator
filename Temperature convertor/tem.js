function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const fromScale = document.getElementById("fromScale").value;
    const toScale = document.getElementById("toScale").value;
    let result = 0;

    if (fromScale === "celsius") {
        if (toScale === "celsius") {
            result = inputTemp;
        } else if (toScale === "fahrenheit") {
            result = (inputTemp * 9/5) + 32;
        } else if (toScale === "kelvin") {
            result = inputTemp + 273.15;
        }
    } else if (fromScale === "fahrenheit") {
        if (toScale === "celsius") {
            result = (inputTemp - 32) * 5/9;
        } else if (toScale === "fahrenheit") {
            result = inputTemp;
        } else if (toScale === "kelvin") {
            result = (inputTemp - 32) * 5/9 + 273.15;
        }
    } else if (fromScale === "kelvin") {
        if (toScale === "celsius") {
            result = inputTemp - 273.15;
        } else if (toScale === "fahrenheit") {
            result = (inputTemp - 273.15) * 9/5 + 32;
        } else if (toScale === "kelvin") {
            result = inputTemp;
        }
    }

    document.getElementById("result").innerHTML = `Result: ${result.toFixed(2)} ${toScale}`;
}
