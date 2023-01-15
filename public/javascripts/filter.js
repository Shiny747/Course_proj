const list = document.querySelector('.mainPanelMenu');

    list.addEventListener('click', event => {
        let targetId = event.target.dataset.filter
        switch(targetId){
            case 'ALL':
            getItems('mainPanelCard');
            break;
            case 'SPAGHETTI':
            getItems(targetId);
            break;
            case 'RISOTTO':
            getItems(targetId);
            break;
        }
    })
      

function getItems(className){
    const items = document.querySelectorAll('.mainPanelCard')
    items.forEach(item => {
        if(item.classList.contains(className)){
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}