const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn"); // Get Elements from HTML
const color = document.querySelector(".color");

// What to do on a btn click
btn.addEventListener("click", function () {
  let randomHex = "#";
  for (let i = 0; i < 6; i++) randomHex += getRandomHex();
  console.log(randomHex);

  document.body.style.backgroundColor = randomHex;
  color.textContent = randomHex;
});

function getRandomHex() {
  return hex[Math.floor(Math.random() * hex.length)];
}
