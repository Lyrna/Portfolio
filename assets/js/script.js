const button_javascript = document.querySelector("p#js");
const js = document.querySelectorAll('div.box.js');

button_javascript.addEventListener('click', () => {
	js.classList.toggle('is-visible');
});