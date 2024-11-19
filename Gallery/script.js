const track = document.querySelector('.carousel-track');
const images = document.querySelectorAll('.carousel-track img');
const totalImages = images.length;
let currentIndex = 0;
let newIndex = currentIndex;
const visibleImages = 3;
const imageWidth = images[0].clientWidth;

function moveCarousel() {
    currentIndex = (currentIndex + 1) % totalImages;
    newIndex = currentIndex - 1;

    images.forEach((img, index) =>   {
        img.classList.remove('center');
        img.classList.remove('tinted');

        const centerIndex = (currentIndex) % totalImages;
        if (centerIndex === 0)  {
            centerIndex += 1;
        }
        if (index === centerIndex)  {
            img.classList.add('center');
        } else  {
            img.classList.add('tinted');
        }
    });

    const offset = -imageWidth * newIndex;
    track.style.transform = `translateX(${offset}px)`;

    track.addEventListener('transitionend', () => {
        if (currentIndex === 0) {
            track.style.transition = 'none';
            track.style.transform = `translateX(0)`;
            setTimeout(() =>    {
                track.style.transition = 'transform 0.5s ease-in-out';
            }, 50);
        }
    });
}

setInterval(() => {
    moveCarousel();
}, 4000);