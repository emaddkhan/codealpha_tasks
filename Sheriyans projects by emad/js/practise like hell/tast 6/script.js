// const home = document.querySelector('#home');
// const about = document.querySelector('#about');
// const content = document.querySelector('#content');
// const homeText =document.querySelector('#homeText');
// const aboutText =document.querySelector('#aboutText');
// const contentText =document.querySelector('#contentText');
// const h3 =document.querySelectorAll('h3')

// homeText.style.display="flex";
// homeText.style.width="50%";

// home.addEventListener('click',function(){
//     hideAllPara()
//     homeText.style.display="flex";
//     homeText.style.width="50%";
// })
// about.addEventListener('click',function(){
//     hideAllPara()
//     aboutText.style.display="flex";
//     aboutText.style.width="50%";
// })
// content.addEventListener('click',function(){
//     hideAllPara()
//     contentText.style.display="flex";
//     contentText.style.width="50%";
// })

// function hideAllPara(){
//     h3.forEach(function(h3){
//         h3.style.display="none"
//     })
// }


//optimize code
const tabs = document.querySelectorAll('.tab');
const texts = document.querySelectorAll('h3');
hideAllData();
texts[0].style.display = "block";
texts[0].style.width="50%";

tabs.forEach(function(tab , index){
    tab.addEventListener("click",function(){
        console.log(tabs.index)
        hideAllData();
        texts[index].style.display = "block";
        texts[index].style.width="50%";
    })
})

function hideAllData (){
    texts.forEach(function(text){
        text.style.display="none";
    })
}