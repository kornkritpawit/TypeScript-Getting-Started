function startGame() {
// strting a new game
  var messagesElement = document.getElementById('messages');
  // messagesElement.innerText = 'Welcome to MultiMath! Starting new game...';
  messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';
}
document.getElementById('startGame')!.addEventListener('click', startGame)