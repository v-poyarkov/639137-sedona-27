var link=document.querySelector(".search"),popup=document.querySelector(".search-form"),arrivalDate=popup.querySelector("[name=arrival]"),departureDate=popup.querySelector("[name=departure]"),adultQuantity=popup.querySelector("[name=adult"),childQuantity=popup.querySelector("[name=child]");popup.classList.add("search-form-hidden"),popup.classList.remove("search-form-show"),link.addEventListener("click",function(e){e.preventDefault(),popup.classList.toggle("search-form-hidden"),popup.classList.toggle("search-form-show"),popup.classList.remove("search-form-error"),popup.classList.contains("search-form-show")&&arrivalDate.focus()}),popup.addEventListener("submit",function(e){arrivalDate.value&&departureDate.value&&adultQuantity.value&&childQuantity||(e.preventDefault(),popup.classList.remove("search-form-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("search-form-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&popup.classList.contains("search-form-show")&&(e.preventDefault(),popup.classList.remove("search-form-show"),popup.classList.remove("search-form-error"))});