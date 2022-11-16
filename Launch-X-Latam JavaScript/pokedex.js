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
            let pokeImg = data.sprites.front_default;
            let pokeInfo = data.abilities;
            pokeImage(pokeImg);
            pokeData(pokeInfo);
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
    //pokeAbilites.innerHTML = '<p>'+abilitiesName[0]+'</p>'; 
    pokeAbilites.innerHTML = abilitiesName
}



