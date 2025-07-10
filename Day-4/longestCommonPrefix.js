// 14. Longest Common Prefix
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters if it is non-empty.

// ✅ Approach: Vertical Scanning (Most Intuitive)
// We’ll compare characters of all strings column by column.

// 🌼 Example:
// js
// Copy
// Edit
// Input: ["flower", "flow", "flight"]
// We compare letters like this:

// css
// Copy
// Edit
// f l o w e r  
// f l o w
// f l i g h t
// First column: all have 'f' → good

// Second column: all have 'l' → good

// Third column: 'o', 'o', 'i' → ❌ mismatch
// ✅ So, return "fl"

// ✅ Code (JavaScript):

var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";

    for (let i = 0; i < strs[0].length; i++) {
        let char = strs[0][i];

        for (let j = 1; j < strs.length; j++) {
            if (i >= strs[j].length || strs[j][i] !== char) {
                return strs[0].substring(0, i);
            }
        }
    }

    return strs[0];
};
// 🧠 Logic Breakdown:
// Loop through characters of the first string

// For each character, check if all other strings have the same character at that position

// As soon as there’s a mismatch — return everything before that index