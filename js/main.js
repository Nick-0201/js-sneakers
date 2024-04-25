const btnLike = document.querySelector(".card__like");
const btnAdd = document.querySelector(".card__add");

btnLike.addEventListener("click", () => { btnLike.classList.toggle("active") });
btnAdd.addEventListener("click", () => { btnAdd.classList.toggle("active") });
