let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

// function save() {
//   let countStr = " " + count + " - ";
//   saveEl.textContent += countStr;
//   countEl.textContent = 0;
//   count = 0;
// }

function reset() {
  count = 0;
  countEl.textContent = count;
  saveEl.textContent = "Previous tallies:";
}

function save() {
  let countStr = " " + count + " - ";
  let colorSpan = document.createElement("span");
  colorSpan.style.color = getRandomColor(); // Set the text color to a random color
  colorSpan.textContent = countStr;

  saveEl.appendChild(colorSpan); // Append the colorized span to the save element

  countEl.textContent = 0;
  count = 0;
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
