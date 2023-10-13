"use strict";

const apiKey = "SfbGJSvgDdVOUweXRkk8ZweIscESbN5P0nlx4kpW";
const apiUrl =
	"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=" +
	apiKey;
let data;

function fetchData() {
	return fetch(apiUrl)
		.then((response) => {
			if (!response.ok) {
				throw new Error("Ошибка при загрузке данных");
			}
			return response.json();
		})
		.then((result) => {
			data = result.photos;
			console.log("данные загрузились");
		})
		.catch((error) => {
			console.error("Произошла ошибка:", error);
		});
}

export { fetchData, data };
