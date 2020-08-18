const btn = document.querySelector(".btn");
const audio = document.getElementById("myAudio");
const toggleBtn = document.querySelector(".toggle-btn");
const textoEsc = [
  "En un universo paralelo en el que las mujeres son el doble de altas que los hombres...",
  "En un universo paralelo en el que los perros hablan...",
  "En un universo paralelo en el que las mujeres ganan 5 veces mas que los hombres...",
  "En un universo paralelo en el que la segunda guerra mundial nunca sucedio...",
  "En un universo paralelo en el que la purga es un evento real...",
  "En un universo paralelo en el que uno de cada diez humanos fueran cyborgs sin saberlo...",
  "En un universo paralelo en el que Africa colonizo a Europa...",
  "En un universo paralelo en el que existen los pokemons...",
  "En un universo paralelo en el que las personas pueden aprender a teletransportarse...",
  "En un universo paralelo en el que las personas pueden leer mentes...",
  "En un universo paralelo en el que USA es un país sub-desarrollado...",
  "En un universo paralelo en el que los juegos del hambre son un evento real celebrado cada año...",
  "En un universo paralelo en el que tu mejor amig@ es millonario(usd millonario)...",
];
const textoPreg = [
  "Cual seria el deporte mas famoso ?",
  "Inmigrarian las personas a tu país? Por que?",
  "Que cosa te parecería super rara, pero que te daría un poco de placer? ",
  "Como se saludarian las personas ?",
  "A quien invitarías a cenar a tu casa?",
  "Crees que existiría la pobreza?",
  "Cual sería la carrera mas popular en tu país?",
  "Cual es la principal razon de muerte?",
  "Cual sería el sentido de la vida?",
  "Quien sería la potencia economica del mundo?",
  "Crees que habría mas locos en el mundo ?",
  "Existirían más, menos, o la misma cantidad de divorcios?",
];
const outputEsc = document.getElementById("texto-escenario");
const outputPreg = document.getElementById("texto-pregunta");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  const randomNumber = getRandomNumber();
  const randomNumber2 = getRandomNumber();
  btn.classList.add("btn-click");
  setTimeout(function () {
    btn.classList.remove("btn-click");
  }, 300);
  outputPreg.textContent = `${textoPreg[randomNumber]}`;
  outputEsc.textContent = `${textoEsc[randomNumber2]}`;
});

function getRandomNumber() {
  return Math.floor(Math.random() * textoPreg.length);
}

function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

toggleBtn.addEventListener("click", function () {
  toggleBtn.classList.toggle("active");
  if (toggleBtn.classList.contains("active")) {
    playAudio();
  } else {
    pauseAudio();
  }
});
