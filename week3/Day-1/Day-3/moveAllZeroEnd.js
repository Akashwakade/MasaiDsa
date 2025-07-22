// // 🎯 Goal:
// // You are given an array. Some elements are 0, and some are not zero.
// // Your job is to move all the zeroes to the end, without changing the order of the other numbers.

// // 📦 Example:
// // Input:
// // js
// // Copy
// // Edit
// let arr= [0, 1, 0, 3, 12];
// // Output:
// // js
// // Copy
// // Edit
// // output= [1, 3, 12, 0, 0];
// // All 0s are now at the end.
// // The order of 1, 3, 12 is the same as it was.

// // 🧠 Think Like This:
// // Go through the array from left to right.
// // Each time you see a non-zero number, move it to the front.
// // Then, fill the remaining positions with 0.

// 🔹 Day 17 of Learning DSA 🔹

// ✅ Problem: Remove duplicates from a sorted array
// 🧠 Concept: Two-pointer approach
// 💡 Key learning:
// Using two pointers (slow & fast), we can remove duplicates in-place without using extra space — a common trick in optimizing array problems!

// js
// Copy
// Edit
var removeDuplicates = function(nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};
// 🎯 Time Complexity: O(n)
// 🎯 Space Complexity: O(1)

// ✨ DSA is all about spotting patterns and thinking efficiently!

// #100DaysOfCode #DSA #JavaScript #CodingInterview #LearnByDoing