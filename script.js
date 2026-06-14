const galleryItems = document.querySelectorAll(".gallery-item img");
console.log(galleryItems);
console.log(galleryItems.length);

const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector("#lightboxImage");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const closeBtn = document.querySelector(".close");

let currentIndex = 0;

const images = [...galleryItems].map(img => img.src);

galleryItems.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        console.log("clicou", index);

        currentIndex = index;

        lightboxImage.src = images[currentIndex];

        lightbox.classList.add("active");

    });

});

console.log(lightbox);
console.log(lightboxImage);

nextBtn.addEventListener("click",()=>{

    currentIndex++;

    if(currentIndex >= images.length){
        currentIndex = 0;
    }

    lightboxImage.src = images[currentIndex];

});

prevBtn.addEventListener("click",()=>{

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }

    lightboxImage.src = images[currentIndex];

});

closeBtn.addEventListener("click",()=>{

    lightbox.classList.remove("active");

});