window.onload = function () {
    const calculateTemp = () => {
        const numberTemp = parseFloat(document.getElementById('temp').value);
        const tempSelected = document.getElementById('temp_diff');
        const valueTemp = tempSelected.options[tempSelected.selectedIndex].value;

        const celToFah = (cel) => {
            let fahrenheit = Math.round((cel * 9/5) + 32);
            return fahrenheit;
        }

        const fahToCel = (fehr) => {
            let celsius = Math.round((fehr - 32) * 5/9);
            return celsius;
        }

        let result;
        if (valueTemp === 'cel') {
            result = celToFah(numberTemp);
            document.getElementById('resultContainer').innerHTML = `= ${result}°Fahrenheit`;
        } else {
            result = fahToCel(numberTemp);
            document.getElementById('resultContainer').innerHTML = `= ${result}°Celsius`;
        }
    }

    const form = document.getElementById('tempCalc');
    form.onsubmit = function (event) {
        event.preventDefault(); // Prevent form submission
        calculateTemp(); // Calculate temperature conversion
    }
}
