// Get the necessary elements
const gallery = document.querySelector('.gallery');
const lightbox = document.querySelector('.lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxCaption = document.querySelector('.lightbox .caption');
const closeBtn = document.querySelector('.lightbox .close');

// Add click event listeners to images
const images = gallery.querySelectorAll('.photo img');
images.forEach((image) => {
  image.addEventListener('click', () => {
    // Set the lightbox image source and caption
    lightboxImage.src = image.src;
    lightboxCaption.textContent = image.nextElementSibling.textContent;

    // Show the lightbox
    lightbox.style.display = 'flex';
  });
});

// Close the lightbox when the close button is clicked
closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Close the lightbox when the lightbox itself is clicked
lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
