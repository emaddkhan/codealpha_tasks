const progressBar= document.querySelector("#progressBar")
const h3 = document.querySelector('h3');
var int; 
var count = 0
int= setInterval(function(){
    if(count===100){
        h3.textContent="Download Completed"
        clearInterval(int)
    }
    count++;
    progressBar.style.width=count+'%';

},100)