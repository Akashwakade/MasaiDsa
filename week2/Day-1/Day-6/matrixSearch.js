// ✅ Problem Statement:
// You are given a 2D matrix where:

// Each row is sorted in ascending order

// The first element of each row is greater than the last element of the previous row

// You need to determine if a target value exists in the matrix.

// 🧾 Example:

let mat = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60]
];

let target = 16;
let ans=false

 for(let i=0;i<mat.length;i++){
    for(let j=0;j<mat[0].length;j++){
   if(mat[i][j]==target){
      ans=true
   }
    }
 } if(ans==true){
    console.log("present")
 }else{
    console.log("not present")
 }
// console.log(mat[0].length)



// let mat = [
//   [1, 3, 5, 7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 60]
// ];
// let target = 16;
// 🧠 My Brute-Force Approach (O(m × n)):
// I first solved it using nested loops 🔁

// js
// Copy
// Edit
// let ans = false;

// for (let i = 0; i < mat.length; i++) {
//   for (let j = 0; j < mat[0].length; j++) {
//     if (mat[i][j] == target) {
//       ans = true;
//     }
//   }
// }

// console.log(ans ? "present" : "not present");
// ✅ Works well
// ❌ But not optimal when the matrix is large

// 💡 Then I Optimized Using Binary Search (O(log(m × n))):
// Because the matrix behaves like a flattened sorted array, I applied binary search on it:

// js
// Copy
Edit
function searchMatrix(matrix, target) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let left = 0, right = rows * cols - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let midElement = matrix[Math.floor(mid / cols)][mid % cols];

    if (midElement === target) return true;
    else if (midElement < target) left = mid + 1;
    else right = mid - 1;
  }

  return false;
}
// 💎 Key Learnings:
// Start with brute-force, then analyze patterns for optimization.

// Think of 2D matrices as 1D arrays when sorted end-to-end — powerful trick!

// Learn to convert between 1D and 2D using:

// js
// Copy
// Edit
// row = Math.floor(mid / cols)
// col = mid % cols
// 💬 First I searched with heart (loops), then I searched with brain (binary)!
// It’s not about getting it perfect — it’s about improving your thinking every day 💪

// #DSA #JavaScript #MatrixSearch #BinarySearch #ProblemSolving #CodingForBeginners #InterviewPrep #LearningInPublic #100DaysOfCode #FullStackJourney