let card = document.getElementById("card");
let section__card = document.getElementById("section__card");
let url = "https://pokeapi.co/api/v2/pokemon/";
let animation__text = document.getElementById("animation__text");
for (i = 153; i < 252; i++) {
    fetch(url + i)
        .then(res => res.json())
        .then(json => {
            console.log(i)

            //Numero en la pokedex
            // let number = document.createElement("P");
            // number.textContent = "Nº " + json.id;
            // number.classList.add("number");
            // div.appendChild(number)

            //enlace de carta
            let enlace = document.createElement("A");
            enlace.setAttribute("href", './pokemon.html?id='+json.id);
            enlace.classList.add("enlace");
            section__card.appendChild(enlace)

            //div de la tarjeta
            let div = document.createElement("DIV");
            div.classList.add("card");
            enlace.appendChild(div)

            //img
            let img = document.createElement("IMG");
            img.classList.add("card__img");
            img.src = json.sprites.other.dream_world.front_default
            div.appendChild(img);



            //nombre 
            let name = document.createElement("P");
            name.textContent = json.name;
            name.classList.add("name");
            div.appendChild(name)
        })
}













