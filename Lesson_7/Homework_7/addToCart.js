"use strict";

// const cartItemsBox = document.createElement("div");
// cartItemsBox.className = "cart-items";
// cartItemsBox.innerHTML = `
// 	<h3 class="cart-items-title">Cart Items</h3>
// 			<div class="item-container">
// 			</div>
// `;

const itemContainerElement = document.querySelector(".item-container");
document.addEventListener("DOMContentLoaded", function () {
	document.body.addEventListener("click", function (event) {
    const addToCartButton = event.target;

    if (addToCartButton && addToCartButton.closest(".add-to-cart-button")) {
      const cartItem = document.createElement("div");
      cartItem.className = "item-box";

      cartItem.innerHTML = `
          <img class="item-img" src="img/item-img1.svg" alt="">
          <button class="item-btn" type="button" title="Delete"><i class="fa fa-close"></i></button>
          <div class="item-description">
            <p class="item-title">
              <span>MANGO PEOPLE</span><br><span>T-SHIRT</span>
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
        `;

      // Добавление товаров
      if (itemContainerElement) {
        itemContainerElement.appendChild(cartItem);
      }

      itemContainerElement.closest(".cart-items").style.display = "flex"; // КОСТЫЛИ !!!!!
      const btnClose = cartItem.querySelector(".item-btn");

      // Удаление товаров
      if (btnClose) {
        btnClose.addEventListener("click", function () {
          if (cartItem) {
            cartItem.remove();
					}
					// КОСТЫЛИ !!!!!
          if (!document.querySelector(".item-box")) {
            // КОСТЫЛИ !!!!!
            itemContainerElement.closest(".cart-items").style.display = "none"; // КОСТЫЛИ !!!!!
          }
        });
      }
      // if (itemContainer && !itemContainer.hasChildNodes) {
      //   cartItemsBox.remove();
      // }
    }
  });
});
