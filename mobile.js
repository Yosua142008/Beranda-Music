// Menangani tampilan header saat digulir pada perangkat mobile
const header = document.querySelector("header h1");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.fontSize = "1.8rem"; // Menurunkan ukuran font header saat menggulir
  } else {
    header.style.fontSize = "2.5rem"; // Kembalikan ukuran font asli saat di atas
  }
});

// Menangani menu navigasi pada perangkat kecil
const navMenu = document.querySelector("nav ul");
const navToggle = document.createElement("button");
navToggle.classList.add("nav-toggle");
navToggle.textContent = "☰"; // Ikon menu hamburger
document.querySelector("header").appendChild(navToggle);

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active"); // Menampilkan atau menyembunyikan menu
  navToggle.classList.toggle("active"); // Ubah ikon hamburger
});

// Animasi hover pada kartu track (meningkatkan pengalaman interaksi di perangkat sentuh)
const trackCards = document.querySelectorAll(".track-card");
trackCards.forEach((card) => {
  card.addEventListener("touchstart", () => {
    card.classList.add("active");
  });
  card.addEventListener("touchend", () => {
    card.classList.remove("active");
  });
});

// Fitur Swipe untuk mengganti track (berfungsi lebih baik di perangkat sentuh)
let startX = 0;
let endX = 0;
const trackCardsContainer = document.querySelector(".track-cards");

trackCardsContainer.addEventListener("touchstart", (event) => {
  startX = event.changedTouches[0].screenX;
});

trackCardsContainer.addEventListener("touchend", (event) => {
  endX = event.changedTouches[0].screenX;
  if (startX > endX + 50) {
    // Geser ke kanan untuk pindah track
    console.log("Geser ke kiri untuk pindah track");
  } else if (startX + 50 < endX) {
    // Geser ke kiri untuk pindah track
    console.log("Geser ke kanan untuk pindah track");
  }
});

// Fungsi untuk mengoptimalkan tampilan slider atau elemen dinamis lainnya
window.addEventListener("resize", () => {
  if (window.innerWidth <= 768) {
    // Mengatur elemen atau perilaku berdasarkan ukuran layar
    document.body.style.padding = "10px"; // Memberikan padding yang sesuai
  } else {
    document.body.style.padding = "20px";
  }
});
