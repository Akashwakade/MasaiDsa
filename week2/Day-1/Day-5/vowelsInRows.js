// Vowels in Rows
// Description
// You are given a 2D array, whose dimensions are stored in two variables with the name N and M

// The value stored in N denotes the number of rows, and the value in M denotes the number of columns

// The 2D array is stored in a variable with the name arr, and contains lower case English characters

// You have to print Yes, if any particular row of a 2D array contains at least one vowel, at least print No

// For example, consider the value stored in N = 3, M = 2, and the array is arr = [a, b], [c, d], [e, f], then the required output will be:

// sql
// Copy
// Edit
// Yes (This row contains the vowel a)
// No  (This row does not contains any vowel)
// Yes (This row contains the vowel e)
// Input
// The first line of the input contains the value stored in N and M

// The next N lines contain M values each denoting the value stored in arr

// Output
// For each row, print: Yes, if the row contains at least one vowel, otherwise print No

// Sample Input 1

let m=3;
let n=2;
let arr=[
   ['a', 'b'],
    ['c', 'd'],
    ['e', 'f']
]
function VowelsInRows(arr,m,n){
//first I will go to entire arr
for(let i=0;i<m;i++){
    let boolen=false
    for(let j=0;j<n;j++){
        // console.log(arr[i][j]) checking all the elements.
        //key learning here earlier I was using it like arr[i][j]==a||e||o||i||u==> it was printing first truthy value
        if(arr[i][j]=="a"|| arr[i][j]=="e" || arr[i][j]=="i"|| arr[i][j]=="o"|| arr[i][j]=="u"){
           boolen=true
        }
        
      
        
    }   if(boolen==true){
            console.log("yes")
        }else{
            console.log("No")
        }
}
}
(VowelsInRows(arr,m,n))



//alternate method

//using includes
let arr1=["a","b","c"]
for(let i=0;i<arr1.length;i++){
let vowels="aeiou";
if(vowels.includes(arr1[i])){
  console.log("yes")
}else{
    console.log("no")
}
}



// Sample Output 1

// Yes
// No
// Yes