
async function searchPokemon() {

    let find = document.getElementById("input-text")
    const url = `https://pokeapi.co/api/v2/pokemon/${find.value}`;
    let response = await fetch(url);


    if (response.status === 200) {
        let data = await response.json();
        
        document.getElementById("img-pokemon").src = data.sprites.other.dream_world.front_default
        document.getElementById("name-pokemon").innerHTML = "<p>Nombre </p>" + data.forms[0].name
        document.getElementById("estadisticas-pokemon").innerHTML = "<p>Estadisticas</p>" + "Ps: "+data.stats[0].base_stat +" ATK: "+data.stats[1].base_stat+
         "<br> DEF: "+data.stats[2].base_stat+ " SP.ATK: "+data.stats[3].base_stat+
         "<br> SP.DEF: "+data.stats[4].base_stat+ " SPEED: "+data.stats[5].base_stat
        document.getElementById("peso-pokemon").innerHTML = "<p>Movimientos</p>" +data.moves[0].move.name+"," +
        data.moves[2].move.name
        document.getElementById("tipo-pokemon").innerHTML = "<p>Tipo</p>" +data.types[0].type.name
      
    }else{
        console.log('Ha ocurrido un error ' + response.error)
    }
}

document.addEventListener("keyup", function(event) {
    if (event.code === 'Enter') {
        fetchText()
    }
});
