const tempInput = document.getElementById("tempInput");
const resultDiv = document.getElementById("result");
const radios = document.querySelectorAll('input[name="conversion"]');

function convertTemperature() {
  const value = parseFloat(tempInput.value);
  if (isNaN(value)) {
    resultDiv.textContent = "Please enter a valid number.";
    resultDiv.classList.add("show");
    return;
  }

  const type = document.querySelector('input[name="conversion"]:checked').value;
  let result;

  if (type === "cToF") {
    result = (value * 9 / 5) + 32;
    resultDiv.textContent = `${value}°C = ${result.toFixed(2)}°F`;
  } else {
    result = (value - 32) * 5 / 9;
    resultDiv.textContent = `${value}°F = ${result.toFixed(2)}°C`;
  }

  resultDiv.classList.add("show");
}

// Update instantly
tempInput.addEventListener("input", convertTemperature);
radios.forEach(r => r.addEventListener("change", convertTemperature));
