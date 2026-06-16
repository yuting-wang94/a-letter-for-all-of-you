const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const moreText = document.getElementById("moreText")

openBtn.addEventListener("click",()=>{
  moreText.classList.remove("hidden-text");
  
});

closeBtn.addEventListener("click",()=>{
  moreText.classList.add("hidden-text");
});



const slider = document.getElementById("slider");
const dots = document.querySelectorAll(".dot");

function goToSlide(index){
  const width = slider.clientWidth;

  slider.scrollTo({
    left: index * width,
    behavior: "smooth"
  });

  updateDots(index);
}

function updateDots(index){
  dots.forEach((dot, i)=>{
    dot.classList.toggle("active", i ===index);
  });
}
dots.forEach((dot, i)=>{
  dot.addEventListener("click", ()=>{
    goToSlide(i);
  });
});
slider.addEventListener("scroll",()=>{
  const index = Math.round(
    slider.scrollLeft / slider.clientWidth
  );
  updateDots(index);
});



const images = document.querySelectorAll('.gallery img');


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {

      setTimeout(() => {
        entry.target.classList.add('show');
      }, index * 120);

    }
  });
}, {
  threshold: 0.15
});

images.forEach((img) => {
  observer.observe(img);
});






const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlayImg");

const galleryImages = document.querySelectorAll(
  ".gallery img, .images-section-hero img, .letter-pics img"
);

galleryImages.forEach(img =>{
  img.addEventListener("click",() =>{
    overlayImg.src = img.src;
    overlay.classList.add("show");
  });
});
overlay.addEventListener("click", () => {
  overlay.classList.remove("show");
});