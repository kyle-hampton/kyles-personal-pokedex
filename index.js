
// hp - integer
// attack - integer
// defense - integer
// abilities - array of strings

var array = [395, 493, 6]
var counter = 0;
pokemonDisplay = document.getElementById('pokemonImg');
buttonRight = document.getElementById('button-right')
buttonLeft = document.getElementById('button-left')


let name = document.getElementById('name')
let hp = document.getElementById('hp')
let attack = document.getElementById('attack')
let defense = document.getElementById('defense')
let abilities = document.getElementById('abilities')

/* -------------------------------------------- button function ----------------------------------------------------------*/
buttonRight.addEventListener('click', function(){
  counter += 1
  if(counter > 2){
    counter = 0;
  }
  ajaxWrapper(array[counter])
  hp.innerHTML = pokemon.hp
  attack.innerHTML = pokemon.attack
  defense.innerHTML = pokemon.defense
  abilities.innerHTML = pokemon.abilities
})

buttonLeft.addEventListener('click', function(){
counter -= 1
  if(counter < 0){
    counter = array.length-1
  }
ajaxWrapper2(array[counter])
hp.innerHTML = pokemon.hp
attack.innerHTML = pokemon.attack
defense.innerHTML = pokemon.defense
abilities.innerHTML = pokemon.abilities

})


/* -------------------------------------------- classes ----------------------------------------------------------*/

class Pokemon{
  constructor(name, number, hp, id, attack, defense, sprite, abilities){
  this.name = name;
  this.number = id;
  this.hp = hp;
  this.attack = attack;
  this.defense = defense;
  this.abilities = [];
  }
}

class Trainer{
  constructor(name, picture){
    this.name = name;
    this.picture = picture;
  }
}

function pokemonParser(result){
  // console.log(result)
  pokemon = new Pokemon()
  pokemon.name = result.name;
  pokemon.number = result.id;
  pokemon.hp = result.stats[5].base_stat;
  pokemon.attack = result.stats[4].base_stat;
  pokemon.defense = result.stats[3].base_stat;
  pokemon.sprite = result.sprites.front_default;
  pokemon.abilities = result.abilities;


  formating(pokemon)
}

/* -------------------------------------------- formatting  ----------------------------------------------------------*/

function formating(pokemon){
  pokemonImg.style.height = '200px';
  pokemonImg.style.width = '200px';
  pokemonImg.style.backgroundImage = "url(" + pokemon.sprite + ")"
  pokemonImg.style.backgroundSize = "100% 100%"

  name.innerHTML = pokemon.name
  hp.innerHTML = pokemon.hp
  attack.innerHTML = pokemon.attack
  defense.innerHTML = pokemon.defense
  abilities.innerHTML = arrayablities()

function arrayablities() {
  let abilityArray = [] ;
    for(let i = 0 ; i< pokemon.abilities.length;i++){
      pusher = "  " + pokemon.abilities[i].ability.name 
      abilityArray.push(pusher)
    }
    return abilityArray ;

}







}



/* -------------------------------------------- Ajax calls ----------------------------------------------------------*/
console.log(array[0])

  $.ajax({url: "https://pokeapi.co/api/v2/pokemon/" + array[0] + "/",
          success: function(result){
          // console.log(result)
          pokemonParser(result)

        }
  });

function ajaxWrapper(x) {

        $.ajax({url: "https://pokeapi.co/api/v2/pokemon/"+ x  +"/",
                success: function(result){
                // console.log(result)
                pokemonParser(result)
            }
          });
}

function ajaxWrapper2(x){
  $.ajax({url: "https://pokeapi.co/api/v2/pokemon/" + x + "/",
          success: function(result){
          // console.log(result)
          pokemonParser(result)
      }});
}

window.onload = function(){
  array[0]


}
