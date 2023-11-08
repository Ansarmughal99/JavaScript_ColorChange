const clock = document.getElementById("clock");

setInterval(function () {
  //setInterval(function (){},1000) // setInterval(function (){},1000 has two parameter one is function and another is set  time e.g 1000 sec
  let date = new Date();
  //console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString(); //is me clock ko har time change krne ke liye set interval use kiah hai aur ye uska function hai setInterval .
}, 1000);
 