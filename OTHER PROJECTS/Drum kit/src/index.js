import mainStyles from '../src/styles/main.css';

// If there is an audio associated with the key pressed, play the audio and run the transition
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('key--playing');
};

// Remove the transition once the transition ends
function removeTransition(e) {
    if(e.propertyName !== 'transform') {
        return;
    }
    e.target.classList.remove('key--playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
