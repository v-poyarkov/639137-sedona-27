var link = document.querySelector(".search");
var popup = document.querySelector(".search-form");
var arrivalDate = popup.querySelector("[name=arrival]");
var departureDate = popup.querySelector("[name=departure]");
var adultQuantity = popup.querySelector("[name=adult");
var childQuantity = popup.querySelector("[name=child]");

popup.classList.add("search-form-hidden");
popup.classList.remove("search-form-show");

link.addEventListener("click", function (evt) {
	evt.preventDefault(); 
	popup.classList.toggle("search-form-hidden");
	popup.classList.toggle("search-form-show");
	popup.classList.remove("search-form-error");
	if (popup.classList.contains("search-form-show")) {
		arrivalDate.focus();
	}
});

popup.addEventListener("submit", function (evt) {
	if (!arrivalDate.value || !departureDate.value || !adultQuantity.value || !childQuantity) {
		evt.preventDefault();
		popup.classList.remove("search-form-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("search-form-error");
	}
});

window.addEventListener("keydown", function (evt) {
	if(evt.keyCode === 27) {
		if (popup.classList.contains("search-form-show")) {
			evt.preventDefault();
			popup.classList.remove("search-form-show");
			popup.classList.remove("search-form-error");
		}
	}
});
