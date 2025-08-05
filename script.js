const colors = ["#e74c3c", "#2ecc71", "#f1c40f", "#9b59b6", "#1abc9c", "#3498db"];
let colorIndex = 0;

const greetBtn = document.getElementById("greetBtn");
greetBtn.addEventListener("click", () => {
  const hour = new Date().getHours();
  let greeting;

  if (hour < 12) {
    greeting = "Good Morning!";
  } else if (hour < 18) {
    greeting = "Good Afternoon!";
  } else {
    greeting = "Good Evening!";
  }

  alert(greeting);

  greetBtn.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
});

function calculate(operation, buttonElement) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let resultText = "Result: ";

  if (isNaN(num1) || isNaN(num2)) {
    resultText += "Please enter valid numbers!";
  } else {
    switch (operation) {
      case "add":
        resultText += num1 + num2;
        break;
      case "subtract":
        resultText += num1 - num2;
        break;
      case "multiply":
        resultText += num1 * num2;
        break;
      case "divide":
        resultText += num2 !== 0 ? num1 / num2 : "Cannot divide by zero!";
        break;
    }
  }

  document.getElementById("result").innerText = resultText;

  buttonElement.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}
