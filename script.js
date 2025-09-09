let currentSound = null;

const buttons = document.querySelectorAll('.soundboard button');
const stopButton = document.getElementById('stop-sound');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Stop current sound if one is playing
    if (currentSound) {
      currentSound.pause();
      currentSound.currentTime = 0;
    }
    // Play new sound
    currentSound = new Audio(button.dataset.sound);
    currentSound.play();
  });
});

stopButton.addEventListener('click', () => {
  if (currentSound) {
    currentSound.pause();
    currentSound.currentTime = 0;
    currentSound = null;
  }
});
