let rulesToggleBtn = document.getElementById("rules-toggle");
let rulesModal = document.getElementById("rules-modal");
let closeModalBtn = document.getElementById("close-modal");

// toggle modal
rulesToggleBtn.addEventListener("click", () => {
  rulesModal.showModal();
});

const jawaban = ["gajah", "orang", "semut"];
const semuaPilihan = document.querySelectorAll(".choice--player");
const gambarJawabanKomputer = document.querySelector(".choice--computer img");
const kalahMenangEl = document.getElementById("kalah-menang");

const DELAY = 1000;

function shuffleGambar() {
  let i = 0;

  const waktuMulai = new Date();
  const interval = setInterval(() => {
    if (new Date() - waktuMulai > DELAY) {
      clearInterval(interval);
    }

    // set images
    gambarJawabanKomputer.setAttribute("src", `img/${jawaban[i++]}.png`);
    if (i === jawaban.length) i = 0;
  }, 50);
}

let hasil = "";

// loop through each item in choice (returns NodeList)
semuaPilihan.forEach((pilihanEl) => {
  pilihanEl.addEventListener("click", () => {
    // get computer and player's answer
    const angkaRandom = Math.floor(Math.random() * jawaban.length);
    const jawabanKomputer = jawaban[angkaRandom];
    const jawabanPemain = pilihanEl.dataset.jawaban;

    // check both against one another
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
    }, DELAY + 100);
  });
});
