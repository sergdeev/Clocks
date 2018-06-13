var hourArrow = document.querySelector('.hour-hand'),
    minuteArrow = document.querySelector('.min-hand'),
    secondArrow = document.querySelector('.second-hand');

function setDate(){
  var now = new Date(),
      seconds = now.getSeconds(),
      minutes = now.getMinutes(),
      hours = now.getHours();
  var secondsDegrees = (seconds * 6) + 90;
  secondArrow.style.transform = `rotate(${secondsDegrees}deg)`;

  var minutesDegrees = (minutes * 6) + 90;
  minuteArrow.style.transform = `rotate(${minutesDegrees}deg)`;

  var hoursDegrees = (hours * 30) + 90;
  hourArrow.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
