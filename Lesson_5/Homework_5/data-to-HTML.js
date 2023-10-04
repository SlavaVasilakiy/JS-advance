"use strict";

import { fetchData, data } from "./data.js"; // Импортируем функцию fetchData и данные из data.js

const wrapperEl = document.querySelector(".swiper-wrapper");

fetchData()
	.then(() => {
		createAndAppendElements();
	})
	.catch((error) => {
		console.error("Произошла ошибка при загрузке данных:", error);
	});

function createAndAppendElements() {
	const limitedData = data.slice(0, 10);

	limitedData.forEach((obj) => {
		const contentElements = `
		<div class="swiper-slide">
			<img src="${obj.img_src}" alt="${obj.rover.name}" class="photo" />			
			<h3 class="full-name">${obj.camera.full_name}</h3>
			<p class="name">Name: ${obj.rover.name}</p>
			<p class="launch-date">Launch date: ${obj.rover.launch_date}</p>
			<p class="landing-date">Landing date: ${obj.rover.landing_date}</p>
		</div>
		`;

		wrapperEl.insertAdjacentHTML("beforeend", contentElements);
	});
}

// const img = document.createElement("img");
// const launchDate = document.createElement("p");
// const landingDate = document.createElement("p");
// const imgUrl = photo.img_src;
// const launchDateText = photo.landing_date;
// img.style.width = "300px";
// divElement.appendChild(img);
