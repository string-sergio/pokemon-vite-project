const MAX = 50

function PeleaPokemon() {

  let ataque_enemy = Math.random();
  let ataque_aliado = Math.random();

  ataque_enemy = ataque_enemy * MAX
  ataque_enemy = Math.floor(ataque_enemy) + 1;

  ataque_aliado = ataque_aliado * MAX
  ataque_aliado = Math.floor(ataque_aliado) + 1;

  let num1 = Number(document.getElementById('ps_pokemon_aliado').value);
  let num2 = Number(document.getElementById('ps_pokemon_enemigo').value);

  console.log(num1)
  console.log(num2)

  document.getElementById('ps_pokemon_aliado').value = num1 - ataque_enemy;
  document.getElementById('ps_pokemon_enemigo').value = num2 - ataque_aliado;

  VidaPokemon()

}

function VidaPokemon() {
  let num1 = Number(document.getElementById('ps_pokemon_aliado').value);
  let num2 = Number(document.getElementById('ps_pokemon_enemigo').value);

  if (num1 == 0 && num2 > 0)
    alert("Lo siento, perdiste")

  if (num2 == 0 && num1 > 0)
    alert("¡¡¡Enhorabuena, has ganado!!!")

  if (num1 == 0 && num2 == 0)
    alert("Tremendo empate")
  }

function Reset() {
  document.getElementById('ps_pokemon_aliado').value = 100
  document.getElementById('ps_pokemon_enemigo').value = 100
}