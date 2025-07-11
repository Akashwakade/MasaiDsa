// 1. Two Sum
// Solved
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input:
 let nums = [2,7,11,15];
 let target = 26;
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].




  function twoSum(nums,target){
   const map= new Map() //creating a map with number and index
    for(let i=0;i< nums.length;i++){

      let complement= target-nums[i]
      if(map.has(complement)){ //has will search for key 
        //get will give value of it.
        return [map.get(complement),i]
      }

      map.set(nums[i],i)
      
     
    } return [];
  }
  console.log(twoSum(nums,target))

 
  