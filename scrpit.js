let myFunction;
setTimer();
function setTimer()
{
     clearInterval(myFunction);

     let timerMonth = "8";
     let timerDay = "1";
     let timerYear = "2022";
     let timerHour = "1";
     let timerMin = "0";
     
     if (timerHour == "")
     {
          timerHour = 0;
     }

     if (timerMin == "")
     {
          timerMin = 0;
     }

     let countdown = timerMonth + "/" + timerDay + "/" + timerYear + "/" + timerHour + ":" + timerMin;
     let countdownDate = new Date(countdown);
     let second = 1000;
     let minute = second * 60;
     let hour = minute * 60;
     let day = hour * 24;

     function showTimer()
     {
          let now = new Date();
          let timeLeft = countdownDate - now;
          let days = Math.floor(timeLeft / day);
          let hours = Math.floor((timeLeft % day) / hour);
          let minutes = Math.floor((timeLeft % hour) / minute);
          let seconds = Math.floor((timeLeft % minute) / second);
          
          document.getElementById("days").innerHTML = days;
          document.getElementById("hours").innerHTML = hours;
          document.getElementById("minutes").innerHTML = minutes;
          document.getElementById("seconds").innerHTML = seconds;

          document.getElementById("end").innerHTML = "";

          if (timeLeft < 0)
          {
               clearInterval(myFunction);
               document.getElementById("end").innerHTML = "Time UP!";
               document.getElementById("days").innerHTML = "0";
               document.getElementById("hours").innerHTML = "0";
               document.getElementById("minutes").innerHTML = "0";
               document.getElementById("seconds").innerHTML = "0";
          }
     }

     myFunction = setInterval(showTimer, 1000);
}