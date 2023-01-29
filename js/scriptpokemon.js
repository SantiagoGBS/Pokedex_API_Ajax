let section__card = document.getElementById("box__section");

document.addEventListener("DOMContentLoaded", ()=>{
    let url=window.location.href
    let id=url.slice(url.indexOf("=")+1)
    // console.log(id)
    fetch("https://pokeapi.co/api/v2/pokemon/"+id)
    .then(res => res.json())
    .then(json => {
        // console.log(json)
                    //div de la tarjeta
                    let div = document.createElement("DIV");
                    div.classList.add("card");
                    box__section.appendChild(div)
        
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

                    //div tipo
                    let div1 = document.createElement("DIV");
                    div1.classList.add("card1");
                    box__section.appendChild(div1)

                    //tipo
                    let typename = document.createElement("P");
                    typename.textContent = "Tipo: ";
                    typename.classList.add("typename");
                    div1.appendChild(typename)

                    //tipo
                    let type = document.createElement("P");
                    type.textContent = json.types[0].type.name;
                    type.classList.add("type");
                    div1.appendChild(type)
                    

                    if(json.types.length>1){
                        let type1 = document.createElement("P");
                        type1.textContent = json.types[1].type.name;
                        type1.classList.add("type1");
                        div1.appendChild(type1)
                    }

                    console.log(json.abilities[0].ability.url)
        let ability=json.abilities[0].ability.url
        fetch(ability)
        .then(res => res.json())
        .then(json => {
            let nameability=json.names[5].name
            let abilityPoke= document.createElement("P");
            abilityPoke.textContent = nameability;
            abilityPoke.classList.add("ability");
            name.appendChild(abilityPoke)
            let parrafo=document.createElement("P")
            parrafo.textContent=json.flavor_text_entries[13].flavor_text
            parrafo.classList.add("parrafoability")
            name.appendChild(parrafo)           
        }) 

        if(json.abilities.length>1){
            let ability1=json.abilities[1].ability.url
            fetch(ability1)
            .then(res => res.json())
            .then(json => {
                let nameability1=json.names[5].name
                let abilityPoke1= document.createElement("P");
                abilityPoke1.textContent = nameability1;
                abilityPoke1.classList.add("ability");
                name.appendChild(abilityPoke1)
                let parrafo1=document.createElement("P")
                parrafo1.textContent=json.flavor_text_entries[13].flavor_text
                parrafo1.classList.add("parrafoability1")
                name.appendChild(parrafo1)        
            })   
        }

    })
    
})