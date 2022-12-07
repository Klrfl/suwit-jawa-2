// generate random answer for the computer
const jawaban = ["gajah", "orang", "semut"];
const choice = document.querySelectorAll(".choice--player");

const gambarJawabKomputer = document.querySelector(".choice--computer img");

const kalahmenang = document.getElementById("kalah-menang");

// loop through each item in choice (returns NodeList)
choice.forEach(function (e) {
  // listen for click, define computer answer each click
  e.addEventListener("click", () => {
    let random = Math.floor(Math.random() * jawaban.length);
    jawabKomputer = jawaban[random];
    gambarJawabKomputer.setAttribute("src", "img/" + jawabKomputer + ".png");
    gambarJawabKomputer.setAttribute("title", jawabKomputer);
    jawabPlayer = e.getAttribute("data-jawaban");

    // initialize to empty string
    let hasil = "";

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

    kalahmenang.innerHTML = `<p> ${hasil} </p>`;
  });
});
