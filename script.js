const albums = document.querySelectorAll('.album');

const fadeInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});
albums.forEach(album => {
    fadeInObserver.observe(album);
});
const albumImages = document.querySelectorAll('.album-image2');
albumImages.forEach(image => {
    image.addEventListener('click', (e) => {
        const audio = e.target.closest('.album').querySelector('audio');
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
});
const albumImages2 = document.querySelectorAll('.album-image2');
albumImages2.forEach(image => {
    image.addEventListener('click', (e) => {
        const audio = e.target.closest('.card').querySelector('audio');
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
    });
});



