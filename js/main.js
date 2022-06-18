let horario = new Date();

let horas = horario.getHours();

let minutos = horario.getMinutes();

let segundos = horario.getSeconds();

const HORAS = document.getElementById("hora");

setInterval(() => {
  /* console.clear();
  console.log(`HORA: ${horas} MINUTOS: ${minutos} SEGUNDOS: ${segundos++}`); */
  HORAS.innerText = `${horas}:${minutos}:${segundos++}`;
  if (segundos == 60) {
    segundos = 0;
    minutos++;
  }
  if (minutos == 60) {
    minutos = 0;
    horas++;
  }
  if (horas == 24) {
    horas = 0;
  }
}, 1000);
