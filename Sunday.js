🚀 Day 14 of My DSA Journey – Mastering Spiral Matrix Traversal

Today I solved a classic and powerful interview problem:
🔄 Print a 2D matrix in spiral order (clockwise)


---

🧾 Example Input:

let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];


---

✅ Expected Output:

1 2 3 6 9 8 7 4 5

We move layer by layer, like peeling an onion 🧅:

➡️ Top Row →

⬇️ Right Column ↓

⬅️ Bottom Row ←

⬆️ Left Column ↑
… and repeat.



---

🧠 My Code:

function spiralMatrix(mat, m, n) {
  let top = 0, bottom = m - 1;
  let left = 0, right = n - 1;
  let result = "";

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) result += mat[top][i] + " ";
    top++;

    for (let i = top; i <= bottom; i++) result += mat[i][right] + " ";
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) result += mat[bottom][i] + " ";
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) result += mat[i][left] + " ";
      left++;
    }
  }

  return result.trim();
}


---

🧠 Key Learnings:

1. Layer-by-layer thinking helps break down big problems into repeatable patterns.


2. Always manage your pointers (top, bottom, left, right) carefully — they are your boundary guards!


3. This pattern is common in:

UI rendering

Data visualization grids

2D robot pathfinding simulations





---

💬 The best part?
This looks complex at first, but becomes easy once you map out the direction flow. Never fear spirals again! 😉

#DSA #100DaysOfCode #MatrixTraversal #SpiralTraversal #JavaScript #CodingForBeginners #InterviewPrep #LearningInPublic #ProblemSolving #FullStackJourney
  
