const fullimageBox = document.getElementById('fullimgBox');
const fullimage = document.getElementById('fullimg');
const leftKey = document.getElementById('leftKey')
const rightKey = document.getElementById('rightKey')
const images = document.querySelectorAll('.image-gallery img')
const fileInput = document.getElementById('fileInput')
const imageGallery = document.querySelector('.image-gallery')
const dotContainer = document.getElementById('dotsContainer')


fileInput.addEventListener('change',function(event){
    const file = event.target.files[0];
    if(file){
        const reader = new FileReader();
        reader.onload = function(e){
            addImageToGallery(e.target.result);
        }
        reader.readAsDataURL(file);
    }
})

// function generateDots(){
//     dotContainer.innerHTML='';
//     imagesArray.forEach(_, index)  {
//         const dot = document.createElement('div');
//         dot.classList.add('dot');
//     }
// }

function addImageToGallery(src){
    const div =document.createElement('div')
    div.classList.add('overflow-hidden')
    const img = document.createElement('img')
    img.src = src
    img.onclick = function(){openFullImage(img.src);};
    div.appendChild(img);
    imageGallery.appendChild(div)
    imagesArray.push(src)
}

let currentindex =0;
const imagesArray = Array.from(images).map((img) => img.src);

function openFullImage(pic) {
    fullimageBox.style.display = 'flex';
    currentindex = imagesArray.indexOf(pic)
    fullimage.src = pic;
}
function closeFullImage(){
    fullimageBox.style.display = 'none';
}
function showNextImage(){
    currentindex = (currentindex + 1) % imagesArray.length;
    fullimage.src = imagesArray[currentindex];
    rightKey.style.boxShadow = "0px 0px 45px rgba(255, 255, 255, 0.5)";
    setTimeout(() => {
        rightKey.style.boxShadow = "0px 0px 5px rgba(255, 255, 255, 0.3)";
    }, 300);
    setTimeout(() => {
        rightKey.style.boxShadow = "0px 0px 5px rgba(255, 255, 255, 0.3)";
    }, 500);
}
function showPreviousImage(){
    currentindex = (currentindex - 1 + imagesArray.length) % imagesArray.length;
    fullimage.src = imagesArray[currentindex];
    leftKey.style.boxShadow = "0px 0px 45px rgba(255, 255, 255, 0.5)";
    setTimeout(() => {
        leftKey.style.boxShadow = "0px 0px 5px rgba(255, 255, 255, 0.3)";
    }, 300);
    setTimeout(() => {
        leftKey.style.boxShadow = "0px 0px 5px rgba(255, 255, 255, 0.3)";
    }, 500);
}
rightKey.addEventListener("click", showNextImage);
leftKey.addEventListener("click", showPreviousImage);

document.addEventListener("keydown",(event)=>{
    if(fullimageBox.style.display === 'flex'){
        if(event.key === 'ArrowRight') showNextImage();
        if(event.key === 'ArrowLeft') showPreviousImage();
        if(event.key === 'Escape') closeFullImage();
    }
})