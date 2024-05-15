const spinBtn = document.getElementById("spinBtn");
const moneyHTML = document.getElementById("moneyHTML");
const machine1 = document.querySelector(".machine1");
const machine2 = document.querySelector(".machine2");
const machine3 = document.querySelector(".machine3");
const input = document.getElementById("input");

const symbols = ["🍒", "🍋", "🍉", "🍇", "🍓", "🍌"];

let money = 300;

moneyHTML.innerText = `Money: ${money}`;

function addSymbols(machine) {
  symbols.forEach((symbol) => {
    machine.innerHTML += `<div class="symbol">${symbol}</div>`;
  });
}

addSymbols(machine1);
addSymbols(machine2);
addSymbols(machine3);

function shuffleSymbols(machine) {
  const symbolsArray = Array.from(machine.children);

  symbolsArray.forEach((symbol) => symbol.classList.remove("symbol"));

  for (let i = symbolsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [symbolsArray[i].innerHTML, symbolsArray[j].innerHTML] = [
      symbolsArray[j].innerHTML,
      symbolsArray[i].innerHTML,
    ];
  }

  setTimeout(() => {
    symbolsArray.forEach((symbol) => symbol.classList.add("symbol"));
  }, 0);
}

spinBtn.addEventListener("click", () => {
  shuffleSymbols(machine1);
  shuffleSymbols(machine2);
  shuffleSymbols(machine3);

  if (
    machine1.children[3].innerHTML === machine2.children[3].innerHTML &&
    machine2.children[3].innerHTML === machine3.children[3].innerHTML
  ) {
    money += parseInt(input.value);
    console.log("You won!");
  } else {
    console.log("Try Again");
    money -= parseInt(input.value);
    if (money <= 0) {
      money = 0;
      alert("You ran out of money");
    }
  }

  moneyHTML.innerText = `Money: ${money}`;
});
