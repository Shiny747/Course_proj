let productContainer = document.querySelector("#productsContainer");

getProducts();

async function getProducts() {
    const response = await fetch("javascripts/products.json");
    const productsArray = await response.json();
    renderProducts(productsArray);
}
function renderProducts(productsArray) {
    productsArray.forEach(function (item) {
        const productHTML = `   <div class="mainPanelCard" data-id="0${item.id}">
                                <img class="cardImage" src="${item.imgSrc}" alt="">
                                <div class="cardText">
                                <h4 class="itemTitle">${item.title}</h4><span class="itemPrice">${item.price}</span>$
                                <p class="description">${item.description}</p>
                                <p class="cardTime"><span class="fa fa-clock" id="deliveryTime">${item.deliveryTime} min </span> <button id="infoButton"
                                data-cart class="fa fa-shopping-basket"></button></p>
                                </div>
                                </div>`;
    productContainer.insertAdjacentHTML('beforeend',productHTML);
    });
}
