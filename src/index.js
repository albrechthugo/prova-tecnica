const getClock = (hour, minute) => {
  if(hour < 0 || hour > 12 || minute < 0 || minute > 60) { // Garantindo que o programa só irá chamar a função se o horário estiver entre 00h e 12h
    console.log('Digite um horário entre 00h e 12h')
  } else {
    console.log(getAngle(hour, minute)) // Chamada da função que calculará o ângulo entre os dois ponteiros
  }

function getAngle(hour, minute) {
  if(hour == 12) {
    hour = 0
  }

  if(minute == 60) {
    minute = 0
  }

  // Cada hora nos dá 30 graus, pois 360 (total) / 12 horas = 30 graus.
  let hourAngle = hour * 30 + (minute / 60) * 30 // Com esse cálculo, garantimos que o ângulo das horas vai ser calculado com a influência dos minutos, visto que num relógio, o ponteiro dos minutos faz com que o das horas ande também.
  let minuteAngle = minute * 6 // Cada minuto nos dá 6 graus, pois 360 (total) / 60 minutos = 6 graus
  let angle

  if(hourAngle > minuteAngle) {
    angle = hourAngle - minuteAngle
  } else {
    angle = minuteAngle - hourAngle
  }

  return angle
  }
}

getClock(0, 15)