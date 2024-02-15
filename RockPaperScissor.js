// const rps = (p1, p2) => {
//   if (p1 == p2) return "Draw!";
//   function getWinner(p1, p2) {
//     switch (p1) {
//       case "scissors":
//         if (p2 == "paper") return "Player 1 won!";
//         if (p2 == "rock") return "Player 2 won!";
//       case "rock":
//         if (p2 == "scissors") return "Player 1 won!";
//         if (p2 == "paper") return "Player 2 won!";
//       case "paper":
//         if (p2 == "scissors") return "Player 2 won!";
//         if (p2 == "rock") return "Player 1 won!";
//       default:
//         return p1;
//     }
//   }

//   return getWinner(p1, p2);
// };




console.log(rps("scissors", "paper"));
