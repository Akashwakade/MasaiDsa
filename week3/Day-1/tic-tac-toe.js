// let mat=[["o","x","o"],
//          ["x","x","x"],
//          ["o","o","x"]      ]

//          //for first row
//          if(mat[0][0]&& mat[0][1]&& mat[0][2]=="x"){
//             console.log("x is winner")
//          }
//           else if(mat[0][0]&& mat[0][1]&& mat[0][2]=="o"){
//             console.log("o is winner")
//          }
//          //for second row
//            if(mat[1][0]&& mat[1][1]&& mat[1][2]=="x"){
//             console.log("x is winner")
//          } else if(mat[1][0]&& mat[1][1]&& mat[1][2]=="o"){
//             console.log("o is winner")
//          }
//           //for third row
//           else if(mat[2][0]&& mat[2][1]&& mat[2][2]=="x"){
//             console.log("x is winner")
//          } else if(mat[2][0]&& mat[2][1]&& mat[2][2]=="o"){
//             console.log("o is winner")
//          }

//          // for first column

//         else if(mat[0][0]&& mat[1][0]&& mat[2][0]=="x"){
//             console.log("x is winner")
//          } else if(mat[0][0]&& mat[2][0]&& mat[2][0]=="o"){
//             console.log("o is winner")
//          }

//           // for second column

//         else if(mat[0][1]&& mat[1][1]&& mat[2][1]=="x"){
//             console.log("x is winner")
//          } else if(mat[0][1]&& mat[2][1]&& mat[2][1]=="o"){
//             console.log("o is winner")
//          }
//           // for third column

//          else if(mat[0][2]&& mat[1][2]&& mat[2][2]=="x"){
//             console.log("x is winner")
//          }else  if(mat[0][2]&& mat[2][2]&& mat[2][2]=="o"){
//             console.log("o is winner")
//          }
// ✨ Day 16 of My DSA Journey: Tic Tac Toe Winner Checker 🎯
// Today I built a function to check the winner in a Tic Tac Toe board!
// It helped me understand the importance of correct comparisons and writing clean, reusable logic.

// Here’s what I learned:
// 🔸 Avoid mistakes like if(a && b && c == "x") – only c gets compared.
// 🔸 Use === to properly compare each element.
// 🔸 DRY code wins – storing winning combinations in an array avoids repetition.

// 💻 Sample Logic:

// js
// Copy
// Edit
const wins = [
  [[0, 0], [0, 1], [0, 2]], // rows
  [[1, 0], [1, 1], [1, 2]],
  [[2, 0], [2, 1], [2, 2]],
  [[0, 0], [1, 0], [2, 0]], // columns
  [[0, 1], [1, 1], [2, 1]],
  [[0, 2], [1, 2], [2, 2]],
  [[0, 0], [1, 1], [2, 2]], // diagonals
  [[0, 2], [1, 1], [2, 0]],
];
