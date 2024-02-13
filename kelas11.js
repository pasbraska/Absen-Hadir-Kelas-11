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

  if (!validateForm()) {
    return;
  }

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

function validateForm() {
  var rules = {
    Arya: "XI DPIB 3",
    Akbar: "XI TKRO 1",
    Rasyd: "XI TKJ 1",
    Fajar: "XI TKJ 2",
    Ibra: "XI TKJ 2",
    Vella: "XI TKJ 2",
    Irma: "XI DKV 1",
    Fauzan: "XI DKV 1",
    Mersa: "XI DKV 3",

    arya: "XI DPIB 1",
    akbar: "XI TKRO 1",
    rasyd: "XI TKJ 1",
    fajar: "XI TKJ 2",
    ibra: "XI TKJ 2",
    vella: "XI TKJ 2",
    irma: "XI DKV 1",
    fauzan: "XI DKV 1",
    mersa: "XI DKV 3",
  };
  var nama = document.getElementById("nama").value;
  var kelas = document.getElementById("kelas").value;

  if (rules.hasOwnProperty(nama)) {
    if (kelas !== rules[nama]) {
      alert("Nama " + nama + " harus memilih kelas " + rules[nama] + ".");
      return false;
    }
  }
  return true;
}

//Kata sandi

function checkPassword() {
  var password = document.getElementById("password").value;

  if (password === "1209") {
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
