


// var removeDuplicates = function(nums) {
//     let obj={};

//     for(let i=0;i<nums.length;i++){
//         for(let key in obj){
//             if(obj[key]==undefined){
//                 obj==nums[i]
//             }else{
//                 obj[key]++
//             }return obj
//         }
     
       
        
//     } 
     
// };
// let nums=[1,1,2]
// console.log(removeDuplicates(nums))

function removeDuplicates(nums) {
  return [...new Set(nums)];
}

let nums = [1, 1, 2];
console.log(removeDuplicates(nums)); // Output: [1, 2]


function removeDuplicates(nums) {
  let obj = {};
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = true;
      result.push(nums[i]);
    }
  }

  return result;
}

