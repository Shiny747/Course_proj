let orderWrapper = document.querySelector('.orderWrapper')

window.addEventListener('click', function (event) {
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {
        let counterWrapper = event.target.closest('.counterWrapper');
        let counter = counterWrapper.querySelector('[data-counter]');

        if (event.target.dataset.action === 'plus') {
            counter.innerText = ++counter.innerText
        }
        if (event.target.dataset.action === 'minus') {
            if (parseInt(counter.innerText) > 1) {
                counter.innerText = --counter.innerText
            }
        }
    }
});
window.addEventListener('click', function (event) {
    if (event.target.hasAttribute('data-cart')) {
        let card = event.target.closest('.mainPanelCard')
        let productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.cardImage').getAttribute('src'),
            title: card.querySelector('.itemTitle').innerText,
            price: card.querySelector('.itemPrice').innerText,
        };
        console.log(productInfo);

        let cartItemHTML = `<div class="orderCard" data-id=${productInfo.id}>
                            <img class="orderImage" src="${productInfo.imgSrc}" alt="">
                            <div class="orderText">${productInfo.title}</p>
                            <div class="counterWrapper">
                            <div class="fa fa-minus-circle" data-action="minus"></div> <span data-counter>1</span>
                            <div class="fa fa-plus-circle" data-action="plus"></div>
                            <div id="times" data-action="delet" class="fa fa-times"></div>
                            </div>
                            </div>
                            <h4 class="orderPrice">${productInfo.price}</h4>
                            </div>`;
    orderWrapper.insertAdjacentHTML('beforeend',cartItemHTML);
    }
});
window.addEventListener('click', function(event){
    if (event.target.dataset.action === 'delet') {
        event.target.closest('.orderCard').remove();
        }
})
function calcTotalPrice(){

}