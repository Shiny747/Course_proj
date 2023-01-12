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
            updateStortage();
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
        updateStortage();
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
updateStortage();
}
    }
});
//удаление товара
window.addEventListener('click', function(event){
    if (event.target.dataset.action === 'delet') {
        event.target.closest('.orderCard').remove();
        calcTotalPrice();
        updateStortage();
        }      
})

// подсчет суммы
function calcTotalPrice(){
 let cardItems = document.querySelectorAll('.orderCard');
 let subPrice = 0;
 let subPriceEl = document.querySelector('.subTotal');
 let taxEl = document.querySelector('.subTax')
 let totalEl = document.querySelector('.totalPrice');
 cardItems.forEach(function(item){
 let amountEl = item.querySelector('[data-counter]');
 let priceEl = item.querySelector('.orderPrice');
 let currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
 subPrice += currentPrice;
 let tax = subPrice * 0.10;
 subPriceEl.innerText = subPrice;
 taxEl.innerText = parseInt(tax);
 let promo = document.getElementById('promoInputId');
 let total = (subPrice + parseInt(tax)) + 5;
 totalEl.innerText =  total;
 window.addEventListener('click', function(event){
    if(event.target.dataset.action === 'findPromo'){
        if(promo.value == "747"){
        totalEl.innerText = total - (parseInt(total*0.30));
        }else{ totalEl.innerText = total;}
    }
});
})

}

// Запись в localStorage и удаление по chekout
const basketOrder = document.querySelector('.basketOrder');

const initialStortage = ()=>{
    if ( localStorage.getItem('products') !== null){
        basketOrder.querySelector('.orderWrapper').innerHTML = localStorage.getItem('products');
                calcTotalPrice();
    }
}
initialStortage();
const updateStortage = ()=>{
    let parent = basketOrder.querySelector('.orderWrapper');
    let html = parent.innerHTML;
    html = html.trim();
    if(html.length){
        calcTotalPrice()
    localStorage.setItem('products',html);}
    else{
        calcTotalPrice()
        localStorage.removeItem('products')
    }
}
window.addEventListener('click', function(event){
    if (event.target.dataset.action === 'chekout') {
        alert('Your order is being processed')
        basketOrder.querySelector('.orderWrapper').innerHTML = " ";
        calcTotalPrice();
        localStorage.removeItem('products')
        }      
})