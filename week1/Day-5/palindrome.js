// // Palindrome Number
// // Easy
// // Topics
// // premium lock icon
// // Companies
// // Hint
// // Given an integer x, return true if x is a palindrome, and false otherwise.

 

// // Example 1:

// //Input:
 let x = 1234321
// // Output: true
// // Explanation: 121 reads as 121 from left to right and from right to left.
var isPalindrome = function(x) {
     
    
    let arr= String(x).split("")
    let narr=[]
    for(let i=arr.length-1;i>=0;i--){
       narr.push(arr[i])
    }
    let str=""
  for(let j=0;j<narr.length;j++){
      str+=narr[j] //it is taking o n2 time complexity I have replace it with join("")
  }
  return str==x
   
    
};
//  console.log(isPalindrome(x))

 function optimizedPalindrome(x){
    let arr=x.toString().split("").reverse().join("")
    return arr==x
 }
 console.log(optimizedPalindrome(x))



// 💡 Step-by-Step System to Avoid "Mind-Blank" in DSA Problems
// ✅ 1. Don't Solve — Just Understand (First 2 mins)
// When you read the question, don’t jump to coding.
// Just ask yourself:

// ❓ What exactly are they asking me to find or return?

// 💬 “Do they want a number? An array? A string?”

// → Write down the input/output types.

// ✅ 2. Run One Manual Test Case
// Take the sample input from the question and manually solve it like a human (on paper or mentally).

// Ask:

// What decisions am I making as I solve it?
// Can I repeat those decisions for any input?

// 🔍 This reveals the core logic hiding inside the problem.

// ✅ 3. Find a Pattern or Category
// Classify the problem:

// Is it about strings? Arrays? Hashing? Recursion?

// Does it feel like sliding window? Two pointers? DFS/BFS?

// Pattern recognition comes from doing more problems — but having a checklist helps reduce fear.

// ✅ 4. Ask Yourself These Helper Questions:
// Use these when stuck:

// Can I brute-force it just to get started?

// Can I use extra space (map, set, array) to simplify logic?

// Can I break it into smaller parts?

// Can I visualize this with a diagram or dry-run?

// ✅ 5. Build Pseudocode Before Code
// Just write:

// pgsql
// Copy
// Edit
// // Step 1: Create a map
// // Step 2: Loop through array
// // Step 3: Check if target - element exists
// 🧠 This stops your brain from blanking because you're thinking in English, not in syntax.

// ✅ 6. If You Still Freeze...
// Take 5 deep breaths. Remind yourself:

// “I don’t have to solve it instantly. I just have to learn one thing from this problem.”

// Then, look at hints, or even the solution — but don’t memorize it, rebuild it from scratch and explain it aloud to yourself.

// 🛡 Mantra for You:
// “DSA is not about speed. It’s about building patterns, step by step. Even pausing is progress.”

// learning is we can only use split with string only.