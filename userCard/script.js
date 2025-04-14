const cardsContainer = document.querySelector('.cards');
const newUserBtn = document.querySelector('#newUserButton')
async function getUser(){
   await axios.get(`https://randomuser.me/api/?results=50`)
    .then(result=>{
        const response =result.data.results;
        const{location,name,email,picture,nat}=response[0];
        cardsContainer.innerHTML +=`<div class="card">
                <img src="${picture.large}" alt="">
                <h4>${name.first+" "+name.last}<span>(${nat})</span></h4>
                <p>${email}</p>
                <p>${location.city+" "+location.state}</p>
            </div>`
    })

}
newUserBtn.addEventListener("click",async function(){
    newUserBtn.disabled=true;
    newUserBtn.classList.add('disabled')
    await getUser();
    newUserBtn.classList.remove('disabled')
    newUserBtn.disabled=false;
})