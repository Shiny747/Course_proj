const list = document.querySelector('.mainPanelMenu'),
      items = document.querySelectorAll('.mainPanelCard');

function filter(){
    list.addEventListener('click', event => {
        let targetid = event.target.dataset.f
        console.log(targetid)
        switch(targetid){
            case 'ALL':
                break
            case 'RISOTTO':
            getItems(targetid);
                break
            case 'SPAGHETTI':
            getItems(targetid);
            break     
        }
    })
}      

function getItems(className){
    items.forEach(item => {
        if(item.classList.contains(className)){
            item.style.visibility = 'hidden'
        } else {
            item.style.visibility = 'visible'
        }
    })
}
filter();