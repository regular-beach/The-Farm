//for loading
window.addEventListener('load', () => {
    // Hide the loading screen
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');

    loadingScreen.style.display = 'none'; // Hide the loading screen
    mainContent.style.display = 'block'; // Show the main content
});

 window.onload = () => {
    const grid = document.querySelector('.grid');
    if (!grid) return; // Avoid errors if grid is not found

    const pckry = new Packery(grid, {
        itemSelector: '.grid-item',
        percentPosition: true
    });

    // Ensure layout happens after ALL images and videos are loaded
    const allItems = grid.querySelectorAll('img, video');
    let loadedCount = 0;

    allItems.forEach(item => {
        if (item.tagName === 'IMG') {
            imagesLoaded(item, function() {
                loadedCount++;
                if (loadedCount === allItems.length) {
                    pckry.layout();
                }
            });
        } else if (item.tagName === 'VIDEO') {
            item.onloadeddata = () => {
                loadedCount++;
                if (loadedCount === allItems.length) {
                    pckry.layout();
                }
            };
        }
    });
};

//lazy load 
document.addEventListener("DOMContentLoaded", function () {
    const lazyImages = document.querySelectorAll('.grid-item');

    const lazyLoad = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const image = entry.target;
                image.src = image.dataset.src; // Set the actual image source
                image.onload = () => image.classList.add('loaded'); // Optional: add a loaded class for styling
                observer.unobserve(image); // Stop observing after the image is loaded
            }
        });
    };

    const observer = new IntersectionObserver(lazyLoad, {
        rootMargin: '0px 0px 200px 0px', // Start loading 200px before the image enters the viewport
    });

    lazyImages.forEach(image => {
        observer.observe(image); // Start observing each lazy image
    });
});

