const futeredItemsElement = document.querySelector(".featured-items");
const itemContainerElement = document.querySelector(".item-container");
const addToCartButton = document.querySelector(".add-to-cart-button");

if (addToCartButton) {
  addToCartButton.addEventListener("click", function () {
    console.log("Клик на кнопке Add to Cart");

    const cartItem = `
      <div class="item-box">
        <img class="item-img" src="img/item-img1.svg" alt="">
        <button class="item-btn" type="button" title="Delete"><i class="fa fa-close"></i></button>
        <div class="item-description">
          <p class="item-title">
            <span>MANGO
              PEOPLE</span><br><span>T-SHIRT</span>
          </p>
          <div class="item-description-parametrs">
            <p class="item-price">
              <span class="item-price-text">Price: <span class="item-price-value">$300</span></span>
            </p>
            <p class="item-color">
              <span class="item-color-text">Color: <span class="item-color-value">Red</span></span>
            </p>
            <p class="item-size">
              <span class="item-size-text">Size: <span class="item-size-value">Xl</span></span>
            </p>
            <p class="item-quantity">
              <span class="item-quantity-text">Quantity:</span><input
                type="number" class="item-input" name="Quantity" value="1"
                min="1" max="10">
            </p>
          </div>
        </div>
      </div>
    `;

    const itemContainerElement = document.querySelector(".item-container");
    if (itemContainerElement) {
      itemContainerElement.insertAdjacentHTML("beforeend", cartItem);
      console.log("Товар добавлен в корзину");
    } else {
      console.log("Элемент .item-container не найден.");
    }
  });
}
