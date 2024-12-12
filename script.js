// Fungsi untuk menangani klik pada tombol navigasi
document.querySelectorAll("nav ul li a").forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault(); // Menghentikan aksi default link
    const page = item.textContent.toLowerCase(); // Ambil nama halaman
    navigateToPage(page); // Panggil fungsi navigasi
  });
});

// Fungsi untuk navigasi antar halaman
function navigateToPage(page) {
  alert(`Navigating to ${page.charAt(0).toUpperCase() + page.slice(1)}...`);
  // Di sini bisa ditambahkan pengalihan halaman sesuai dengan aplikasi web Anda.
  // Contoh: window.location.href = `/${page}.html`;
}

// Fungsi untuk menangani klik pada track card (featured track)
document.querySelectorAll(".track-card").forEach((card) => {
  card.addEventListener("click", function () {
    const trackTitle = card.querySelector("h3").textContent;
    const artistName = card.querySelector("p").textContent;
    alert(`Playing: ${trackTitle} by ${artistName}`);
    // Anda bisa mengarahkan ke halaman pemutaran atau menampilkan lebih banyak detail lagu.
  });
});

// Fungsi untuk menangani klik pada playlist link
document.querySelectorAll(".playlist li a").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const playlistName = link.textContent;
    alert(`Loading Playlist: ${playlistName}`);
    // Anda bisa menambahkan fungsionalitas untuk mengarahkan ke playlist tertentu.
  });
});
