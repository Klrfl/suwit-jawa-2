// generate random answer for the computer
let jawaban = ["gajah", "orang", "semut"];

let choice = document.querySelectorAll(".choice");

// listen for click and define player answer
choice.forEach(function (e) {
  e.addEventListener("click", () => {
    let random = Math.floor(Math.random() * jawaban.length);
    jawabKomputer = jawaban[random];

    // jawabKomputer = "gajah";
    jawabPlayer = e.getAttribute("data-jawaban");

    // check the answer
    let hasil = "";

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

    console.log(hasil);
  });
});
