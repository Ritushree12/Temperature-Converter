const fahrenheitInput = document.getElementById("fahrenheit");
const celciusInput = document.getElementById("celcius");
const kelvinInput = document.getElementById("kelvin");
const error = document.getElementById("error-msg");

document.addEventListener("DOMContentLoaded", () => {
  const celciusInput = document.getElementById("celcius");

  celciusInput.addEventListener("input", function toKF() {
    const c = parseFloat(celciusInput.value);

    if (!isNaN(c)) {
      const f = (9 / 5) * c + 32;
      const k = c + 273.15;

      document.getElementById("fahrenheit").value = f.toFixed(2);
      document.getElementById("kelvin").value = k.toFixed(2);
    } else {
      document.getElementById("fahrenheit").value = "";
      document.getElementById("kelvin").value = "";
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const fahrenheitInput = document.getElementById("fahrenheit");

  fahrenheitInput.addEventListener("input", function toCK() {
    const f = parseFloat(fahrenheitInput.value);

    if (!isNaN(f)) {
      const c = ((f - 32) * 5) / 9;
      const k = c + 273.15;

      document.getElementById("celcius").value = c.toFixed(2);
      document.getElementById("kelvin").value = k.toFixed(2);
    } else {
      document.getElementById("celcius").value = "";
      document.getElementById("kelvin").value = "";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const kelvinInput = document.getElementById("kelvin");

  kelvinInput.addEventListener("input", function toCF() {
    const k = parseFloat(kelvinInput.value);

    if (!isNaN(k)) {
      const f = ((k - 273.15) * 9) / 5 + 32;
      const c = k - 273.15;

      document.getElementById("celcius").value = c.toFixed(2);
      document.getElementById("fahrenheit").value = f.toFixed(2);
    } else {
      document.getElementById("celcius").value = "";
      document.getElementById("fahrenheit").value = "";
    }
  });
});

function validateInput(inputElement) {
  const value = inputElement.value.trim();

  if (value === "" || !isNaN(value)) {
    error.style.visibility = "hidden";
    inputElement.style.border = "2px solid #a5d6a7";
  } else {
    error.style.visibility = "visible";
    error.style.display = "flex";
    error.textContent = "Enter only numeric values.";
    inputElement.style.border = "2px solid red";
  }
}

celciusInput.addEventListener("input", () => validateInput(celciusInput));
fahrenheitInput.addEventListener("input", () => validateInput(fahrenheitInput));
kelvinInput.addEventListener("input", () => validateInput(kelvinInput));
