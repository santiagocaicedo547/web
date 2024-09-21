// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Yo quiero besar tu boca, lo anhelo con ansias locas", time: 27 },
  { text: "Deseo abrir tu alma y entrar en tu manantial de granas", time: 33 },
  { text: "Tan suaves que son tus labios como plumas de un canario", time: 41 },
  { text: "Tu pelo es como la espuma que brota al rozar del aire que lo toca", time: 46 },
  { text: "¿Por qué Dios te hizo tan bella?", time: 53 },
  { text: "Eres pura, Eres una estrella", time: 53.5 },
  { text: "Te amo demasiado", time: 55 },
  { text: "(Te) quiero a mi lado", time: 56.5 },
  { text: "(Eres) púrpura de mi alma", time: 58 },
  { text: "(Eres) agua de mi vida", time: 60 },
  { text: "...", time: 63 },
  { text: "¿Por qué Dios te hizo tan bella?", time: 65 },
  { text: "Eres pura, Eres una estrella", time: 66.5 },
  { text: "Te amo demasiado", time: 68 },
  { text: "(Te) quiero a mi lado", time: 68.5 },
  { text: "(Eres) púrpura de mi alma", time: 70 },
  { text: "(Eres) agua de mi vida", time: 72 },
  { text: "...", time: 73 },
  
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);