var counter = document.querySelector("#counter");
var txtArea = document.querySelector("textarea");

txtArea.addEventListener("input",function(){
    counter.textContent=txtArea.value.trim().length;
})