const fetchPokemon = async() => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
   //para consultar APIS
   let data = await fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pictures/pokemon-sad.jpeg")
        }
        else {
            return res.json();
        }
    })
        if (data) {
            console.log(data);
            console.log(data.species.name);
            let pokeImg = data.sprites.front_default;
            let pokeName = data.name;
                     
           
            pokeImage(pokeImg);
            pokeData(pokeInfo);
            PName(pokeName);
            console.log(pokeImg);
        
    }
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeData =(abilities)=>{
    const pokeAbilites = document.getElementById("abilities");
    
    const abilitiesName = abilities.map(item => item.ability.name);
   
    pokeAbilites.innerHTML = abilitiesName;
    
}
const PName =(pokeName)=>{
    const pokeN = document.getElementById("nombrePokemon");
    pokeN.innerHTML = ("Nombre: "+pokeName);
}



