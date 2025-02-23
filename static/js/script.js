
const titleText = document.querySelector('.title');


titleText.addEventListener('mouseover', () => {
  titleText.style.color = 'red';
});


titleText.addEventListener('mouseout', () => {
  titleText.style.color = 'white';
});

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid');
  if (!grid) {
    console.error('Grid element not found!');
    return;
  }

  const overlay = document.querySelector('.overlay');
  const carouselContainer = overlay.querySelector('.carousel');
  const closeButton = document.querySelector('.close-overlay');

  // Initialize Packery
  const pckry = new Packery(grid, {
    itemSelector: '.grid-item',
    percentPosition: true,
  });

  imagesLoaded(grid).on('progress', () => {
    pckry.layout();
  });

  // Handle image clicks
  document.querySelectorAll('.grid-image').forEach((image) => {
    image.addEventListener('click', (event) => {
      const images = Array.from(document.querySelectorAll('.grid-image')).map((img) => img.src);

      // Populate the carousel
      carouselContainer.innerHTML = images
        .map(
          (src) =>
            `<div class="carousel-cell"><img data-flickity-lazyload="${src}" alt=""></div>`
        )
        .join('');

      // Initialize Flickity
      const flickityInstance = new Flickity(carouselContainer, {
        cellAlign: 'center',
        contain: true,
        lazyLoad: true,
        wrapAround: true,
      });

      // Focus on the clicked image
      const clickedImageIndex = images.indexOf(event.target.src);
      flickityInstance.select(clickedImageIndex, true, true);

      // Show the overlay
      overlay.classList.remove('hidden');
    });
  });

  // Handle close button
  closeButton.addEventListener('click', () => {
    Flickity.data(carouselContainer)?.destroy();
    carouselContainer.innerHTML = '';
    overlay.classList.add('hidden');
  });
});





//storing old history script here 
 // Move the image and text upwards after the fade-in
 setTimeout(() => {
  const textBottomOffset = text.getBoundingClientRect().bottom;
  const windowHeight = window.innerHeight;
  const distanceToMove = textBottomOffset - windowHeight;

  heroImage.style.transition = "transform 8s ease-in-out";
  text.style.transition = "transform 8s ease-in-out";
  heroImage.style.transform = `translateY(-${distanceToMove}px)`;
  text.style.transform = `translateY(-${distanceToMove}px)`;

  // Re-enable scrolling after the animation finishes
  setTimeout(() => {
      document.body.style.overflow = "auto";
      enableManualScrolling(); // Enable manual scrolling here
  }, 2000);

  // Ensure the history container's overflow is visible so the content doesn't get clipped
  historyContainer.style.overflow = "visible";
}, 2000);

// Enable manual scrolling once the animation completes
function enableManualScrolling() {
  // You can use GSAP ScrollTo for smooth scroll to a specific section after animation
  gsap.to(window, {
      duration: 3, // Adjust the time for the smooth scroll
      scrollTo: {
          y: historyContainer, // Scroll to the history container
          offsetY: 100, // Adjust if needed
          autoKill: true // Allow manual scrolling after animation
      },
      ease: "power2.out"
  });
}

// Disable scroll temporarily until animation is done
document.body.style.overflow = "hidden";
