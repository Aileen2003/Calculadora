const display = document.getElementById("display");
const expression = document.getElementById("expression");

let currentInput = "0";

function updateScreen() {
  expression.textContent = formatForDisplay(currentInput);
  display.textContent = formatForDisplay(currentInput);
}

function formatForDisplay(value) {
  return String(value).replace(/\./g, ",");
}

function appendValue(value) {
  if (currentInput === "0" && value !== ".") {
    currentInput = value;
  } else {
    currentInput += value;
  }
  updateScreen();
}

function clearAll() {
  currentInput = "0";
  updateScreen();
}

function toggleSign() {
  try {
    if (currentInput === "0") return;

    if (!isNaN(currentInput)) {
      currentInput = (parseFloat(currentInput) * -1).toString();
      updateScreen();
    }
  } catch (error) {
    currentInput = "0";
    updateScreen();
  }
}

function appendPercent() {
  try {
    if (!isNaN(currentInput)) {
      currentInput = (parseFloat(currentInput) / 100).toString();
      updateScreen();
    }
  } catch (error) {
    currentInput = "0";
    updateScreen();
  }
}

function calculate() {
  try {
    const result = eval(currentInput);

    if (!isFinite(result)) {
      throw new Error("Resultado inválido");
    }

    currentInput = result.toString();
    updateScreen();
  } catch (error) {
    expression.textContent = formatForDisplay(currentInput);
    display.textContent = "Error";
    currentInput = "0";
  }
}

updateScreen();