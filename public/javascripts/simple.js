let orderWrapper = document.querySelector('.orderWrapper')
// работа счетчика
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
        if(event.target.hasAttribute('data-action') && event.target.closest('.orderWrapper')){
            calcTotalPrice();
        }
    };
});
// добавление в корзину
window.addEventListener('click', function (event) {
    if (event.target.hasAttribute('data-cart')) {
        let card = event.target.closest('.mainPanelCard')
        let productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.cardImage').getAttribute('src'),
            title: card.querySelector('.itemTitle').innerText,
            price: card.querySelector('.itemPrice').innerText,
        };

    let itemInOrder = orderWrapper.querySelector(`[data-id="${productInfo.id}"]`);

    if (itemInOrder){
        const counterEL = itemInOrder.querySelector('[data-counter]');
        counterEL.innerText = parseInt(counterEL.innerText) +1;
        calcTotalPrice();
    } else{
        let cartItemHTML = `<div class="orderCard" data-id=${productInfo.id}>
        <img class="orderImage" src="${productInfo.imgSrc}" alt="">
        <div class="orderText">${productInfo.title}</p>
        <div class="counterWrapper">
        <div class="fa fa-minus-circle" data-action="minus"></div> <span data-counter>1</span>
        <div class="fa fa-plus-circle" data-action="plus"></div>
        <div id="times" data-action="delet" class="fa fa-times"></div>
        </div>
        </div>
        <h4 class="orderPrice">${productInfo.price}$</h4>
        </div>`;
orderWrapper.insertAdjacentHTML('beforeend',cartItemHTML);
calcTotalPrice();
}
    }
});
//удаление товара
window.addEventListener('click', function(event){
    if (event.target.dataset.action === 'delet') {
        event.target.closest('.orderCard').remove();
        calcTotalPrice();
        }      
})

// подсчет суммы
function calcTotalPrice(){
 let cardItems = document.querySelectorAll('.orderCard');
 let subPrice = 0;
 let subPriceEl = document.querySelector('.subTotal');
 let taxEl = document.querySelector('.subTax')
 let totalEl = document.querySelector('.totalPrice');
 let deliveryFee = 5;
 cardItems.forEach(function(item){
 let amountEl = item.querySelector('[data-counter]');
 let priceEl = item.querySelector('.orderPrice');
 let currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
 subPrice += currentPrice;
 let tax = subPrice * 0.10;
 subPriceEl.innerText = subPrice;
 taxEl.innerText = parseInt(tax);
 let promo = document.getElementById('promoInputId');
 let total = (subPrice + parseInt(tax)) + deliveryFee;
 totalEl.innerText = total;
 window.addEventListener('click', function(event){
    if(event.target.dataset.action === 'findPromo'){
        if(promo.value == "747"){
        totalEl.innerText = total - (parseInt(total*0.30));
        }
    }
});
})





}
