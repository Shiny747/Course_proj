const list = document.querySelector('.mainPanelMenu'),
      items = document.querySelectorAll('.mainPanelCard');

 async function filter(){
    list.addEventListener('click', event => {
        let targetId = event.target.dataset.f
        console.log(targetId)
        switch(targetId){
            case 'ALL':
                break
            case 'RISOTTO':
            getItems(targetId);
                break
            case 'SPAGHETTI':
            getItems(targetId);
            break     
        }
    })
}      

function getItems(className){
    items.forEach(item => {
        if(item.classList.contains(className)){
            item.style.display = 'block'
            console.log("Error here!");
        } else {
            item.style.display = 'none'
            console.log("Error here2!");
        }
    })
}
