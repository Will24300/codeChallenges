const rps = (p1, p2) => {
  if (p2 === p1) return "Draw!";
  if (p1 === 'rock' && p2 !== 'paper' || p1 === 'scissors' && p2 !== "rock" || p1 === 'paper' && p2 !== "scissors") return "Player 1 won!";
  else return "Player 2 won!";
  
};
