function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

var computerMove, playerMove, set_playerMove, item;
item = String(item) + String('');

//setmove

set_playerMove;
computerMove = 'kamień';
printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
playerMove = 'papier';
printMessage('Zagrałem' + playerMove + '! Jeśli Twój ruch to kamień, to przegrywasz!'); 

//computermove

var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  computerMove = 'kamień';
} else {
  computerMove = 'nieznany ruch';
}
printMessage('Mój ruch: ' + computerMove); 

if (randomNumber == '2') {
    computerMove = 'papier';
} else {
    computerMove = 'nieznany ruch';
}  
printMessage('Mój ruch: ' + computerMove);  

if (randomNumber == '3') {
    computerMove = 'nożyce';
} else {
    computerMove = 'nieznany ruch';
}  
printMessage('Mój ruch: ' + computerMove);  

//playermove    

var playerMove, playerInput;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1') {
  playerMove = 'kamień';
} else {
  playerMove = 'nieznany ruch';
}

if (playerInput == '2') { 
  playerMove = 'papier';
} else { 
  playerMove = 'nieznany ruch';
}

if (playerInput == '3') { 
  playerMove = 'nożyce';
} else { 
  playerMove = 'nieznany ruch';
}
printMessage('Twój ruch: ' + playerMove); 


var playerInput, playerMove;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1') {
  playerMove = 'kamień';
} else if (playerInput == '2') {
  playerMove = 'papier';
} else {
  if (playerInput == '3') {
    playerMove = 'nożyce';
  } else {
    playerMove = 'nieznany ruch';
  }
}
printMessage('Twój ruch: ' + playerMove);

