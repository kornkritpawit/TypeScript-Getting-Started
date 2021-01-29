function startGame() {
// strting a new game

  // const playerName: string = 'Audrey';
  let playerName: string | undefined = getInputValue('playername');
  // playerName = 'Throne';

  logPlayer(playerName);

  // var messagesElement: HTMLElement | string;
  // messagesElement = document.getElementById('messages');
  // if (typeof messagesElement === 'string') {
  //   return messagesElement;
  // }
  // else {
  //   return messagesElement;
  // }

  // var messagesElement = document.getElementById('messages');
  // // messagesElement.innerText = 'Welcome to MultiMath! Starting new game...';
  // messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';

  postScore(100, playerName)
  // postScore(80)
  postScore(-5, playerName);
}

function logPlayer(name?: string ): void {
  console.log(`New game starting for player: ${name}`);
}

function getInputValue(elementID: string): string | undefined {
  const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);
  
  if (inputElement.value == '') {
    return undefined;
  }
  else {
    return inputElement.value;
  }
}

function postScore(score: number, playerName: string = 'MultiMath Player'): void {

  let logger: (value: string) => void;

  if (score < 0 ) {
    logger = logError;
  } else {
    logger = logMessage; 
  }

  const scoreElement: HTMLElement | null = document.getElementById('postedScores');
  scoreElement!.innerText = `${score} = ${playerName}`;

  logger(`Score: ${score}`);
}
document.getElementById('startGame')!.addEventListener('click', startGame)

// const logMessage = (message: string): void => console.log(message);
const logMessage = (message: string) => console.log(message);

// logMessage('Welcome to Multimath!');

function logError(err: string): void {
  console.error(err);
}

