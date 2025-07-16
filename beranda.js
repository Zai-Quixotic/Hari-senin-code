// script.js

document.addEventListener('DOMContentLoaded', function() {

    // 1. Fungsi untuk Menu Mobile (Hamburger)
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');

    // Pastikan kedua elemen ada sebelum menambahkan event listener
    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
        });
    }

    // 2. Fungsi untuk Tombol Volume (jika ada)
    const volumeBtn = document.querySelector('.volume-btn');
    if (volumeBtn) {
        const volumeIcon = volumeBtn.querySelector('.material-symbols-outlined');
        volumeBtn.addEventListener('click', () => {
            volumeIcon.innerText = (volumeIcon.innerText === 'volume_up') ? 'volume_off' : 'volume_up';
        });
    }

    // 3. Fungsi untuk semua Carousel/Shelf (jika ada)
    const shelves = document.querySelectorAll('.shelf');
    shelves.forEach(shelf => {
        const carousel = shelf.querySelector('.carousel');
        const leftBtn = shelf.querySelector('.left-btn');
        const rightBtn = shelf.querySelector('.right-btn');
        if (carousel && leftBtn && rightBtn) {
            const scrollAmount = carousel.clientWidth * 0.8;
            rightBtn.addEventListener('click', () => {
                carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            });
            leftBtn.addEventListener('click', () => {
                carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            });
        }
    });

});