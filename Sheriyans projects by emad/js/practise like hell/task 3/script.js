const form = document.querySelector('form');
const inps =document.querySelectorAll('input[type="text"]')
const h4 = document.querySelector("h4")

form.addEventListener("submit",function(e){
    e.preventDefault();
    for(var i = 0; i<inps.length; i++){
        if(inps[i].value.trim()===""){
            h4.textContent="fill the form";
            h4.style.color="red";
            break;
        }
        else{
            h4.textContent="";
        }
    }
})