let audio = new Audio("audio/Mechanical-Keyboard.mp3");
document.addEventListener("keydown",function(e){
  let keyPressed = e.key;
  let keyButton = document.querySelectorAll(`button[data-key="${keyPressed}"]`);
  audio.play();
  keyButton.forEach(function(e){
    if(e){
     // add color activation to buttons
      e.classList.add("active"); 
      e.click();
      //check the caps lock button light
      if(e.dataset.key == 'CapsLock'){
        if(e.classList.contains("lighting")){
            e.classList.remove("lighting");
        }else{
            e.classList.add("lighting");
        }
      }
      setTimeout(function(){
      e.classList.remove("active");
      audio.currentTime = 0;
      },100);
    }
  });
});