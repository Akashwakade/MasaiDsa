let mat=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

//output==> zig-zag
// 3 2 1 4 5 6 9 8 7
let m=3;
let n=3
//logic==> if row is even move colum from right to left
//and when row is odd move colum from left to right
//what is fixed ?==> row is fixed so it will be an outer loop
function zigZag(mat,m,n){
 let bag=""
for(let i=0;i<m;i++){
    if(i%2==0){ //checking if my row is even
     for(let j=n-1 ; j>=0;j--){
         bag+=mat[i][j]+" "
     }}
     if(i%2==1){//checking if my row is odd
     for(let j=0;j<n;j++){
        bag+=mat[i][j]+" "
     }
    }
    
} return bag
}

console.log(zigZag(mat,m,n))
