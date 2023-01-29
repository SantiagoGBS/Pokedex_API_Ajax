
//Animacion del texto
let texto="Bienvenido a la pokedex de las tres primeras generaciones. No ha sido fácil conseguirla, he tardado muchos años, pero aquí está. Echale un ojo, seguro que encuentras algo de ayuda."
let a=0
document.addEventListener("DOMContentLoaded", ()=>{
    setInterval(() => {
    
        animation__text.textContent+=texto.charAt(a)
        a++
    }, 40);
})