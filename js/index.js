let rulesToggle = document.getElementById("rules-toggle");
let rulesModal = document.getElementById("rules-modal");
let closeModal = document.getElementById("close-modal");

// toggle modal
rulesToggle.addEventListener("click", () => {
  rulesModal.classList.add("active");
});

window.onclick = (event) => {
  if (event.target == rulesModal) {
    rulesModal.classList.remove("active");
  }
};

closeModal.onclick = () => {
  closeModal.parentElement.parentElement.classList.remove("active");
};

// generate random answer for the computer
const jawaban = ["gajah", "orang", "semut"];
const choice = document.querySelectorAll(".choice--player");
const gambarJawabKomputer = document.querySelector(".choice--computer img");
const kalahmenang = document.getElementById("kalah-menang");

// initialize to empty string
let hasil = "";

function shuffleGambar() {
  let i = 0;
  const waktuMulai = new Date();
  const interval = setInterval(function () {
    if (new Date() - waktuMulai > 1000) {
      clearInterval(interval);
    }

    gambarJawabKomputer.setAttribute("src", "img/" + jawaban[i++] + ".png");
    if (i == jawaban.length) i = 0;
  }, 50);
}

// loop through each item in choice (returns NodeList)
choice.forEach(function (e) {
  // listen for click, define computer answer each click
  e.addEventListener("click", () => {
    let random = Math.floor(Math.random() * jawaban.length);
    jawabKomputer = jawaban[random];
    gambarJawabKomputer.setAttribute("src", "img/" + jawabKomputer + ".png");
    gambarJawabKomputer.setAttribute("title", jawabKomputer);

    jawabPlayer = e.getAttribute("data-jawaban");

    // check the answer
    if (jawabKomputer === jawabPlayer) {
      hasil = "seri!";
    } else {
      if (jawabPlayer === "orang") {
        hasil = jawabKomputer === "gajah" ? "Kalah!" : "Menang!";
      } else if (jawabPlayer === "semut") {
        hasil = jawabKomputer === "gajah" ? "Menang!" : "Kalah";
      } else if (jawabPlayer === "gajah") {
        hasil = jawabKomputer === "semut" ? "Kalah!" : "Menang!";
      }
    }

    shuffleGambar();

    kalahmenang.innerHTML = `<p>Menunggu komputer...</p>`;

    // add result after one second
    setTimeout(() => {
      kalahmenang.innerHTML = `<p> ${hasil} </p>`;
    }, 1000);
  });
});
