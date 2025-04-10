const people = document.querySelector(".people");
const input = document.querySelector('input');

var data = [
    {name:"Emad" , src:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"},
    {name:"imran" , src:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"},
    {name:"umair" , src:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"},
    {name:"amir" , src:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0fGVufDB8fDB8fHww"},
]
var pers="";
data.forEach(function(elem){
    pers+=`<div class="person">
                    <img src="${elem.src}" alt="person">
                    <h3>${elem.name}</h3>
            </div>`
})
people.innerHTML=pers;

input.addEventListener('input',function(){
    
    var matching = data.filter(function(e){
        return e.name.toLowerCase().startsWith(input.value.toLowerCase())
    })
    var newUsers="";
    matching.forEach(function(elem){
        newUsers+=`<div class="person">
                        <img src="${elem.src}" alt="person">
                        <h3>${elem.name}</h3>
                </div>`
    })
    people.innerHTML=newUsers;
})
