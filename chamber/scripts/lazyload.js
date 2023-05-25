//Gallery for Lazy Loading Images

//Create a list
let imagesToLoad = document.querySelectorAll('img[data-src]');

//Separate out or loop through each image
const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

//Loop through each image
imagesToLoad.forEach((img) => {
    loadImages(img);
});

//Do something with each image in the images list
const imgOptions = {
    rootmargin: '0px 0px 300px 0px',
    threshold: 0
};

if ('IntersectionObserver' in Window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });

    //Load image if necessary
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} else {

    //Load all images if not supported
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}
document.addEventListener('DOMContentLoaded', function() {
    var lazyImages = [].slice.call(document.querySelectorAll('.lazy'));
  
    if ('IntersectionObserver' in window) {
      var lazyImageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var lazyImage = entry.target;
            lazyImage.src = lazyImage.dataset.src;
            lazyImage.classList.remove('lazy');
            lazyImageObserver.unobserve(lazyImage);
          }
        });
      });
  
      lazyImages.forEach(function(lazyImage) {
        lazyImageObserver.observe(lazyImage);
      });
    }
  });
  