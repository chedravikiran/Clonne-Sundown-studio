let container = document.querySelector('.element-con');
let img = document.querySelector('.sticky-image');

// Show image on hover of container
container.addEventListener('mouseenter', () => {
  img.style.display = 'block';
});

container.addEventListener('mouseleave', () => {
  img.style.display = 'none';
});

// Target all .elem elements
let elems = document.querySelectorAll('.elem');
elems.forEach((ele) => {
  ele.addEventListener('mouseenter', function() {
    let image = ele.getAttribute("data-img");
    img.style.backgroundImage = `url(${image})`;
    img.style.backgroundSize = 'cover';
    img.style.backgroundPosition = 'center';
    console.log(image)
  });
});
