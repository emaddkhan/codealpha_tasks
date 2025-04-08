const ul =document.querySelector('ul');
const inp = document.querySelector('input');
const add = document.querySelector("#add");
const remove = document.querySelector("#remove");

var li;
add.addEventListener('click',function(){
    if(inp.value.trim()===""){}
    else{
        li = document.createElement('li');
        li.textContent=inp.value;
        ul.appendChild(li)
        inp.value="";
    }
})

remove.addEventListener('click',function(){
    ul.innerHTML=""
})
