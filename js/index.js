let rulesToggleBtn = document.getElementById("rules-toggle");
let rulesModal = document.getElementById("rules-modal");
let closeModalBtn = document.getElementById("close-modal");

// toggle modal
rulesToggleBtn.addEventListener("click", () => {
  rulesModal.classList.add("active");
});

closeModalBtn.addEventListener("click", () => {
  rulesModal.classList.remove("active");
});

window.addEventListener("click", (e) => {
  if (e.target == rulesModal) {
    rulesModal.classList.remove("active");
  }
});

// generate random answer for the computer
const jawaban = ["gajah", "orang", "semut"];
const semuaPilihan = document.querySelectorAll(".choice--player");
const gambarJawabanKomputer = document.querySelector(".choice--computer img");
const kalahMenangEl = document.getElementById("kalah-menang");

function shuffleGambar() {
  let i = 0;

  const waktuMulai = new Date();
  const interval = setInterval(() => {
    if (new Date() - waktuMulai > 1000) {
      clearInterval(interval);
    }

    // set images
    gambarJawabanKomputer.setAttribute("src", `img/${jawaban[i++]}.png`);
    if (i == jawaban.length) i = 0;
  }, 50);
}

// initialize to empty string
let hasil = "";

// loop through each item in choice (returns NodeList)
semuaPilihan.forEach(function (pilihanEl) {
  pilihanEl.addEventListener("click", () => {
    // define computer answer
    const angkaRandom = Math.floor(Math.random() * jawaban.length);
    const jawabanKomputer = jawaban[angkaRandom];

    const jawabanPemain = pilihanEl.dataset.jawaban;

    // check the answer
    if (jawabanKomputer === jawabanPemain) {
      hasil = "seri!";
    } else {
      if (jawabanPemain === "orang") {
        hasil = jawabanKomputer === "gajah" ? "Kalah!" : "Menang!";
      } else if (jawabanPemain === "semut") {
        hasil = jawabanKomputer === "gajah" ? "Menang!" : "Kalah!";
      } else if (jawabanPemain === "gajah") {
        hasil = jawabanKomputer === "semut" ? "Kalah!" : "Menang!";
      }
    }

    kalahMenangEl.innerHTML = `<p>Menunggu komputer...</p>`;
    shuffleGambar();

    // add result and set computer answer image after one second
    setTimeout(() => {
      kalahMenangEl.innerHTML = `<p>${hasil}</p>`;
      gambarJawabanKomputer.setAttribute("src", `img/${jawabanKomputer}.png`);
      gambarJawabanKomputer.setAttribute("title", jawabanKomputer);
    }, 1000);
  });
});
