// KE Google Drive
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwFd_fp0Md7abc63XQV6Cyh8bATZI0W_hgTm8SXznkyoKNuEkA1hyEAQvqGaitSsFgpGw/exec";
const form = document.forms["form"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.querySelector(".btn-loading");
const myAlert = document.querySelector(".alert");
const cardIsi = document.querySelector(".card");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nameInput = document.getElementById("nama");
  const name = nameInput.value.trim();

  const approvedNames = [
    "Fajar",
    "Rasyd",
    "Arya",
    "Akbar",
    "Ibra",
    "Vella",
    "Irma",
    "Fauzan",
    "Mersa",
    "fajar",
    "rasyd",
    "arya",
    "akbar",
    "ibra",
    "vella",
    "irma",
    "fauzan",
    "mersa",
  ];
  if (!approvedNames.includes(name)) {
    alert(
      "Kesalahan nama! Perhatikan besar & kecilnya HURUF ! Lihat daftar nama di atas"
    );
    {
      nameInput.style.backgroundColor = "red";
      nameInput.style.color = "white";
      (nameInput.style.borderBlockStyle = "black"), "solid";
    }
    return;
  } else {
    nameInput.style.backgroundColor = "green";
    nameInput.style.color = "white";
  }

  btnLoading.classList.toggle("d-none");
  btnKirim.classList.toggle("d-none");
  btnReset.classList.toggle("d-none");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      myAlert.classList.toggle("d-none");
      cardIsi.classList.toggle("d-none");
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});

const btnReset = document.querySelector(".btn-reset");
btnReset.style.backgroundColor = "red";

//Kata sandi

function checkPassword() {
  var password = document.getElementById("password").value;

  if (password === "1111") {
    document.getElementById("passwordForm").style.display = "none";
    document.querySelector(".main").style.display = "block";
  } else {
    alert("Kata sandi salah. Coba lagi.");
  }
}

//lihat password

function showPassword() {
  var input = document.getElementById("password");

  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}


//Jam di navbar

function updateJam() {
  const sekarang = new Date();
  const jam = sekarang.getHours().toString().padStart(2, "0");
  const menit = sekarang.getMinutes().toString().padStart(2, "0");
  const detik = sekarang.getSeconds().toString().padStart(2, "0");
  const jamDinding = `${jam}:${menit}:${detik}`;

  document.getElementById("waktu").innerText = jamDinding;
}

setInterval(updateJam, 1000);

updateClock();