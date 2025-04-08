const h4 = document.querySelector("h4");
const inputs = document.querySelectorAll("input[type='text']");
const button = document.querySelector("button");
const para = document.querySelector("para")
const emailpara = document.querySelector('#email')
const namepara = document.querySelector("#name")
const inp1= document.querySelector('#inp1')
const inp2= document.querySelector('#inp2')
button.addEventListener("click",function(e){
    e.preventDefault();
    if(inp1.value===""){
        emailpara.textContent="give email"
    }else{
        emailpara.textContent=""
    }
    if(inp2.value===""){
        namepara.textContent="give name"
    }else{
        namepara.textContent=""
    }
    for(i=0;i<inputs.length;i++){
        if(inputs[i].value===""){
            h4.textContent = "fill the form";
            para.textContent="fill the email and name"
            para.style.color = "red";
        }else{
            h4.textContent="";
            para.textContent = "";
        }
    }
})
