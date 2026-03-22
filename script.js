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
  const operators = ["+", "-", "*", "/"];

  if (currentInput === "0" && value !== "." && !operators.includes(value)) {
    currentInput = value;
    updateScreen();
    return;
  }

  const lastChar = currentInput.slice(-1);

  if (operators.includes(value) && operators.includes(lastChar)) {
    currentInput = currentInput.slice(0, -1) + value;
    updateScreen();
    return;
  }

  if (value === ".") {
    const parts = currentInput.split(/[\+\-\*\/]/);
    const lastPart = parts[parts.length - 1];
    if (lastPart.includes(".")) return;
  }

  currentInput += value;
  updateScreen();
}

function getLastNumberParts(expr) {
  const match = expr.match(/(-?\d*\.?\d+)$/);
  if (!match) return null;

  return {
    number: match[0],
    start: match.index,
    end: match.index + match[0].length
  };
}

function toggleSign() {
  const parts = getLastNumberParts(currentInput);

  if (!parts) return;

  const { number, start, end } = parts;
  let newNumber;

  if (number.startsWith("-")) {
    newNumber = number.slice(1);
  } else {
    newNumber = "-" + number;
  }

  currentInput =
    currentInput.slice(0, start) +
    newNumber +
    currentInput.slice(end);

  updateScreen();
}

function appendPercent() {
  const parts = getLastNumberParts(currentInput);

  if (!parts) return;

  const { number, start, end } = parts;
  const percentValue = (parseFloat(number) / 100).toString();

  currentInput =
    currentInput.slice(0, start) +
    percentValue +
    currentInput.slice(end);

  updateScreen();
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