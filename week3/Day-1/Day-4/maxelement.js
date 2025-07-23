// 🚀 Problem: Find the maximum number in a given array.
// You may think this is too simple — but that’s the beauty of it.
// Interviewers love basics done right! ✅

// 🔍 DUBX Breakdown
// D – Define: Given an array, return the largest number.
// U – Understand: Input ➡️ [3, 7, 2, 9, 4] → Output ➡️ 9
// B – Build: Loop through, compare each number, and track the max.
// X – Explain: Mastering iteration like this strengthens your fundamentals.

// 💡 Extension Ideas:
// – Return max and its index
// – Handle edge cases (empty array)
// – Use in real problems like sorting or heap building

// 🔁 Remember: It’s not always about hard problems.
// It’s about thinking clearly and coding cleanly.

// #100DaysOfCode #DSA #JavaScript #ArrayProblems #InterviewPrep #LearnWithMe #LinkedInDaily
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
