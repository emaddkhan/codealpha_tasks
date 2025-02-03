const fullimageBox = document.getElementById('fullimgBox');
const fullimage = document.getElementById('fullimg');
const leftKey = document.getElementById('leftKey')
const rightKey = document.getElementById('rightKey')
const images = document.querySelectorAll('.image-gallery img')

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