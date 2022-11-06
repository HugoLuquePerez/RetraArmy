const botonCokies = document.querySelector(".cookies__button");
const cookies = document.querySelector(".cookies__container");
const desplazamiento = ()=> {
    cookies.style.left = "80px";
    cookies.style.bottom = "100px";
    cookies.style.transition = "all, 1s";
}

const cerrar = ()=> {
    cookies.style.left = "-500px"
    cookies.style.bottom = "100px";
    cookies.style.transition = "all, 1s";
    botonCokies.style.display = "none";
}
