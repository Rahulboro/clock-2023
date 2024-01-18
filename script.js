const numbershours = document.querySelector(".numbers-hours");

const numberElement = [];

for (let i = 0; i < 12; i++) {
  numberElement.push(`<span style ="--index:${i};"><p>${i}</p></span>`);
}
numbershours.insertAdjacentHTML("afterbegin", numberElement.join(""));
