// Given a square matrix print both the diagonals

let arr=[[1,2,3],
        [4,5,6],
        [7,8,9]]
 let m=3;
 let n=3;
    // output=1,5,9,3,5,7

    // function printDiagonal(){
       
    //     let rarr=[];
    //      let larr=[];
    //     for(let i=0;i<m;i++){
         
    //     for(let j=0;j<n;j++){
    //         // console.log(mat[i][j])
    //       if((i-j)==0){
    //         larr.push(arr[i][j])
    //       } else if((i+j)==(n-1)){
    //         rarr.push(arr[i][j])
    //       }
          
    //     }
    // } return rarr
    // }
    // console.log(printDiagonal())
    let mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < arr.length; i++) {
  console.log("Main →", arr[i][i], " | Anti →", arr[i][arr.length - 1 - i]);
}
// Output: 1 5 9 (Main), 3 5 7 (Anti)

    