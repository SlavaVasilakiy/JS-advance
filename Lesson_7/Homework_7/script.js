"use strict";

async function getDataFromFile(filePath) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error("Ошибка при загрузке файла");
    }
    return await response.json();
  } catch (error) {
    console.error("Произошла ошибка:", error);
    throw error;
  }
}

const cardsData = "cards.json"; // Поправил имя переменной
const cardContainer = document.querySelector(".card-box-container");

getDataFromFile(cardsData)
  .then((data) => {
    if (cardContainer) {
      data.forEach((card) => {
        const cardHtml = `
        <div class="card-box">
          <div class="card-img-container">
            <img src="${card.photoSrc}" alt="${card.cardTitle}" class="card-img">
            <button type="button" class="add-to-cart-button">Add to Cart</button>
          </div>
          <div class="card-text">
            <span class="card-title">${card.cardTitle}</span>
            <span class="card-description">${card.cardDescription}</span>
            <span class="card-price">$${card.cardPrice}.00</span>
          </div>
        </div>
        `;
        cardContainer.insertAdjacentHTML("beforeend", cardHtml);
      });
    } else {
      console.log("Элемент .card-box-container не найден.");
    }
  })

// Урок 13. Семинар. Работа с медиа
// Дан макет сайта https://www.figma.com/file/mnLY69cYE5cqWM5w6n5hXx/Seo-%26-Digital-Marketing-Landing-Page?node-id=4203%3A2&t=q4NMnXTnwyyTSGA6-0
// На предыдущем уроке вы сформировали данные из раздела "Товары".
// При клике на кнопку add to cart у товара под блоком с акциями появляется раздел Cart items.
// В разделе Cart items появляются товары, добавленные в корзину,
// При клике на крестик, товар удаляется из из раздела корзины, если удалить все товары, раздел полностью пропадает.


