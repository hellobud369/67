const buttons = document.querySelectorAll('.soundboard button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const sound = new Audio(button.dataset.sound);
    sound.play();
  });
});
