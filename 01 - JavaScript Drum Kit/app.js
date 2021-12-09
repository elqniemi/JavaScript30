// Listen to a keydown event
// For anyone looking at this JS, the comments are for learning and note-taking, not for understandable code


function playSound(e) {
    // Creating a variable to select an audio based on keycode:
    // document.querySelector() iterates through DOM ==> finds audio with CORRESPONDING code
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // Create a variable here to do the same for specific key CLASS
    // This means it iterates to find a .key class with the corresponding code (e.g. 65 on .key)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    // If statement to see if a keypress has not queried an audio ==> returns nothing instead of null
    if(!audio) return;

    // This is done to reset audio to zero if you repeatedly press it...
    audio.currentTime = 0;
    //... so when you press it AGAIN, the time is zero again and starts from beginning
    audio.play();
    // Adds a chained class (CSS) to our key class. The new class gives it a new style
    key.classList.add('playing');
}

function removeTransition(e) {
    // add if statement to catch when the button is in transition ==> does not remove style
    // but as soon as it has transitioned, the other part kicks in and removes style
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

// Make an array of all keys
// When the program runs, it keeps an eye for transition events on key class css elements
// When the transition animation ends, it invokes the remove transition function to return to baseline
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// this listens to keydown events, and invokes play sound when happening
window.addEventListener('keydown', playSound);
