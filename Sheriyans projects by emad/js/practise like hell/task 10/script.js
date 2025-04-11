const progBar = document.querySelector(".progbar");
window.onscroll=function(){
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scrollTop/scrollHeight)*100;
    progBar.style.width=scrolled+"%"

}
