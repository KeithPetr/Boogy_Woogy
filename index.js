let rollDice = document.getElementById("roll-dice");
let die = document.getElementsByClassName("dice");
let die1 = document.getElementById("dice1");
let dice1 = document.getElementById("dice1");
let dice2 = document.getElementById("dice2");
let dice3 = document.getElementById("dice3");
let dice4 = document.getElementById("dice4");
let dice5 = document.getElementById("dice5");

// ---Dice Roll Function---

let images = [
  "./images/die1.svg",
  "./images/die2.svg",
  "./images/die3.svg",
  "./images/die4.svg",
  "./images/die5.svg",
  "./images/die6.svg",
];

let generateNewDie = function () {
  let num = Math.ceil(Math.random() * 6);
  return {
    value: num,
    isHeld: false,
    id: Math.random() * 1000000,
    img: images[num - 1],
  };
};

rollDice.addEventListener("click", function () {
  let newDice = [];
  let allNewDice = function () {
    newDice.push(generateNewDie());

    
    return newDice;
  };

  console.log(newDice);

  dice1.innerHTML = `<img src="${allNewDice()[0].img}" />`;
  dice2.innerHTML = `<img src="${allNewDice()[1].img}" />`;
  dice3.innerHTML = `<img src="${allNewDice()[2].img}" />`;
  dice4.innerHTML = `<img src="${allNewDice()[3].img}" />`;
  dice5.innerHTML = `<img src="${allNewDice()[4].img}" />`;

});

// ---Dice Hold Section---
// ---Select which dice to hold---

dice1.addEventListener("click", function (event) {
  if (dice1.classList.contains("dice-hold")) {
    dice1.classList.remove("dice-hold");
  } else {
    dice1.classList.add("dice-hold");
  }
  console.log(event.target);
});

dice2.addEventListener("click", function () {
  if (dice2.classList.contains("dice-hold")) {
    dice2.classList.remove("dice-hold");
  } else {
    dice2.classList.add("dice-hold");
  }
});

dice3.addEventListener("click", function () {
  if (dice3.classList.contains("dice-hold")) {
    dice3.classList.remove("dice-hold");
  } else {
    dice3.classList.add("dice-hold");
  }
});

dice4.addEventListener("click", function () {
  if (dice4.classList.contains("dice-hold")) {
    dice4.classList.remove("dice-hold");
  } else {
    dice4.classList.add("dice-hold");
  }
});

dice5.addEventListener("click", function () {
  if (dice5.classList.contains("dice-hold")) {
    dice5.classList.remove("dice-hold");
  } else {
    dice5.classList.add("dice-hold");
  }
});

//---Scoring the held dice---
