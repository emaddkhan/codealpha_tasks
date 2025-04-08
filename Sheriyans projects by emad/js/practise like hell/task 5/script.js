const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const h3 = document.querySelector('h3')

var count =0;
var int;
start.addEventListener('click',function(){
    int=setInterval(function(){
        h3.textContent=count;
        count +=1;
    },1000)
})
stop.addEventListener('click',function(){
    clearInterval(int);
})