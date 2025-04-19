/* start navbar */

let saved_btn = $('.navbar .saved button');
let account_btn = $('.navbar .account button');$ 

$('.navbar-light .navbar-toggler').click(() => {
    saved_btn.toggleClass("disabled");
    account_btn.toggleClass("disabled");
})

/* end navbar */
document.addEventListener("DOMContentLoaded", function() {
  // Select all images with data-src attribute
  const lazyImages = document.querySelectorAll("img[data-src]");
  
  // Check if IntersectionObserver is supported
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: "200px" // Load images 200px before they enter viewport
    });

    lazyImages.forEach(img => imageObserver.observe(img));
  } else {
    // Fallback for older browsers
    lazyImages.forEach(img => {
      img.src = img.dataset.src;
    });
  }
});
