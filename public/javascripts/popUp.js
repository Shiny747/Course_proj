
const openPopUp = document.querySelector('#openPopUp');
const closePopUp = document.querySelector('#closePopUp');
const popUp = document.querySelector('#popUp');

openPopUp.addEventListener('click', ()=>{
    popUp.classList.add('active');
})

closePopUp.addEventListener('click',()=>{
    popUp.classList.remove('active');
})