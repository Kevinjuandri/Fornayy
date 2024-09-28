       // Mengambil elemen audio
       const duckSound = document.getElementById('duck-sound');
       const greetingText = document.getElementById('greeting');
       
       // Menambahkan event listener saat teks di-klik
       greetingText.addEventListener('click', () => {
           duckSound.currentTime = 0; // Mengatur ulang audio ke awal
           duckSound.play().catch(error => {
               console.error("Audio playback failed:", error);
           }); // Memutar suara bebek
       });
       
               // Fungsi untuk mengontrol musik latar
               function toggleMusic() {
                   const music = document.getElementById('bg-music');
                   const button = document.getElementById('play-music-btn');
           
                   if (music.paused) {
                       music.play();
                       button.textContent = "Pause Music"; // Mengubah teks tombol
                   } else {
                       music.pause();
                       button.textContent = "Play Music"; // Mengubah kembali teks tombol
                   }
               }
       
               // Memulai musik latar saat halaman dimuat (bisa butuh interaksi pengguna di beberapa browser)
               window.addEventListener('load', () => {
                   const music = document.getElementById('bg-music');
                   music.play();
               });
               const photoGroups = document.querySelectorAll('.photo-group');
               const sections = document.querySelectorAll('section');
       
               const options = {
                   root: null,
                   rootMargin: '0px',
                   threshold: 0.1,
               };
       
               const observer = new IntersectionObserver((entries) => {
                   entries.forEach(entry => {
                       if (entry.isIntersecting) {
                           entry.target.classList.add('show');
                       } else {
                           entry.target.classList.remove('show');
                       }
                   });
               }, options);
       
               photoGroups.forEach(group => {
                   observer.observe(group);
               });
       
               sections.forEach(section => {
                   observer.observe(section);
               });
       
               function toggleList(box) {
                   const list = box.querySelector('.hidden-list');
                   list.classList.toggle('show');
               }// Fungsi untuk animasi hati
const heartsAnimation = () => {
    const heartsContainer = document.getElementById('hearts');
    heartsContainer.innerHTML = ''; // Bersihkan konten sebelumnya

    for (let i = 0; i < 500; i++) { // Menghasilkan 100 hati
        const heart = document.createElement('div');
        heart.innerText = '❤️';
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw'; // Posisi acak di lebar layar
        heart.style.animationDuration = (Math.random() * 5 + 5) + 's'; // Durasi acak
        heartsContainer.appendChild(heart);
    }

    // Menghapus hati setelah 10 detik
    setTimeout(() => {
        heartsContainer.innerHTML = ''; // Bersihkan setelah 10 detik
    }, 100000);
};

// Memanggil fungsi saat halaman dimuat
window.addEventListener('load', () => {
    heartsAnimation(); // Panggil animasi hati saat halaman dimuat
});

// Menambahkan event listener untuk scroll
document.getElementById('message').addEventListener('mouseenter', heartsAnimation); // Mengaktifkan animasi saat mouse masuk ke section
