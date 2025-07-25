// 👩‍💻 Day 18 – DSA Learning with DUBX 🚀
// 🔍 Topic: Two Pointer – Find Pair with Target Sum

// Today I solved one of the most classic and frequently asked interview problems in DSA!

// ✅ Problem:
// Given a sorted array and a target, check if any two elements add up to that target.

// js
// Copy
// Edit
// Input: arr = [1, 2, 4, 6, 10], target = 8  
// Output: true (2 + 6)
// 💡 DUBX Method to Solve:
// 🔹D – Define:

// Input: sorted array and a target

// Output: true or false

// 🔹U – Understand:
// Use two pointers:

// Start one at beginning (left)

// One at end (right)

// 🔹B – Build:

// js
// Copy
// Edit
function hasPairWithSum(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) return true;
    sum < target ? left++ : right--;
  }
  return false;
}
// 🔹X – Explain:
// Since the array is sorted, we can shrink our search space from both ends efficiently!

// 💭 Key Learning:
// Two pointers work best on sorted arrays to reduce time complexity from O(n²) ➡️ O(n)

// #DSA #100DaysOfCode #TwoPointers #LinkedInLearning #MERN #ProblemSolving #AkashLearning #CodingJourney