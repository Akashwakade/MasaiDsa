// 13. Roman to Integer
// Easy
// Topics
// premium lock icon
// Companies
// Hint
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

 

// Example 1:

let s = "XIX"
// Output: 3
function romanToInteger(s){
 const obj={ "I":1,"V" : 5, "X" :10,"L" :  50,"C" :  100,"D" :  500,"M" :  1000,"XL":40, "XC":90, "CD":400,"CM":900,"IV":4,"IX":9 };
  for(let key in obj){
   if(s==key){
        return obj[key]
    }
  }
  let ans=0;
  let ans1=0;
  let nobj={};
  let arr=s.split("");
  for(let i=arr.length-1;i>=1;i--){
    if(arr[i]=="X" && arr[i-1]=="I"){
       arr.split("IX")
    }
    console.log(arr)
    
  for (let key in obj){
    // console.log(key)
  
    let arr=s.split("")
    
    
    // console.log(arr)
    for(let i=0;i<arr.length;i++){
        if(arr[i]==key){
        //    console.log(obj[key])
        //    console.log(typeof(obj[key]))
           ans1+=obj[key]
         
        }   
    }
 
    

 }   return ans+ans1

    }
  
  }

 

console.log(romanToInteger(s))
