function startGame() {
// strting a new game

  // const playerName: string = 'Audrey';
  let playerName: string | null;
  playerName = null;
  logPlayer(playerName);

  // var messagesElement: HTMLElement | string;
  // messagesElement = document.getElementById('messages');
  // if (typeof messagesElement === 'string') {
  //   return messagesElement;
  // }
  // else {
  //   return messagesElement;
  // }

  var messagesElement = document.getElementById('messages');
  // messagesElement.innerText = 'Welcome to MultiMath! Starting new game...';
  messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';
}

function logPlayer(name: string | null) {
  console.log(`New game starting for player: ${name}`);
}
document.getElementById('startGame')!.addEventListener('click', startGame)