const clicker1 = document.querySelector(".clicker1");
const clicker2 = document.querySelector(".clicker2");
const clicker = document.querySelector(".clicker");
const form = document.querySelector(".calculator");
const result_value = document.querySelector("#result");

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

clicker1.addEventListener('click', () => {
    clicker1.style.backgroundColor = getRandomColor();
});


clicker2.addEventListener('click', () => {
    const now = new Date();
    alert(`Current time:\n${now.toLocaleTimeString()}\nDate: ${now.toLocaleDateString()}`);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let num1 = parseFloat(document.getElementById("first_number").value) || 0;
  let num2 = parseFloat(document.getElementById("second_number").value) || 0;
  let sum = num1 + num2;
  result_value.textContent = sum;

  result_value.style.transform = "scale(1.1)";
    setTimeout(() => {
        result_value.style.transform = "scale(1)";
    }, 300);
});
  

