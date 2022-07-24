//function for key press to play audio
function playAudio (e)  {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //Audio Function
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);    //Key animation Function
    if(!audio) return; //stops function if null key is pressed
    audio.currentTime = 0; //Sets audio to play from start on keypress
    audio.play(); //plays audio if correct key pressed
    key.classList.add('playing'); //activates .playing 
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return; //skip if propertyName is not a transform
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playAudio);