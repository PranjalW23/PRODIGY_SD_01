function convertTemperature() {
    const tempValue = parseFloat(document.getElementById('tempValue').value);
    const tempUnit = document.getElementById('tempUnit').value;

    let celsius, fahrenheit, kelvin;

    if (isNaN(tempValue)) {
        alert("Please enter a valid number");
        return;
    }

    switch (tempUnit) {
        case "Celsius":
            celsius = tempValue;
            fahrenheit = (celsius * 9/5) + 32;
            kelvin = celsius + 273.15;
            break;
        case "Fahrenheit":
            fahrenheit = tempValue;
            celsius = (fahrenheit - 32) * 5/9;
            kelvin = celsius + 273.15;
            break;
        case "Kelvin":
            kelvin = tempValue;
            celsius = kelvin - 273.15;
            fahrenheit = (celsius * 9/5) + 32;
            break;
    }

    // Display the results
    document.getElementById('celsius-result').textContent = `Celsius: ${celsius.toFixed(2)} °C`;
    document.getElementById('fahrenheit-result').textContent = `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
    document.getElementById('kelvin-result').textContent = `Kelvin: ${kelvin.toFixed(2)} K`;
}
