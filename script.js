gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {

    /* --- Animación de entrada: servicios --- */
    const frames = gsap.utils.toArray('.frame');
    frames.forEach((frame, index) => {
        gsap.fromTo(frame,
            {
                y: 30,
                x: index % 2 === 0 ? -30 : 30,
                opacity: 0
            },
            {
                y: 0,
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: frame,
                    start: 'top 85%',
                    end: 'top 40%',
                    scrub: true
                }
            }
        );
    });

    /* --- Animación de entrada: galería --- */
    const galleryItems = gsap.utils.toArray('.gallery-item');
    galleryItems.forEach((item) => {
        gsap.fromTo(item,
            { y: 40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.7,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: item,
                    start: 'top 90%',
                    end: 'top 55%',
                    scrub: true
                }
            }
        );
    });

    /* --- Lightbox de galería --- */
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxClose = document.getElementById('lightboxClose');
    const galleryImages = document.querySelectorAll('.gallery-item img');

    function openLightbox(img) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.hidden = false;
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.hidden = true;
        lightboxImg.src = '';
        document.body.style.overflow = '';
    }

    galleryImages.forEach((img) => {
        img.addEventListener('click', () => openLightbox(img));
    });

    lightboxClose.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !lightbox.hidden) closeLightbox();
    });
});