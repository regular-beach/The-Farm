
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

