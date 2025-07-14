let mat=[
    [1,8,9],
    [2,7,10],
    [3,6,11],
    [4,5,12]
]
//output==> 4321 5678 12 11 10 9

let m=4;// row
let n=3;//colum
//colum is fixed it would be a outer loop
   let bag=""
for(let i=0;i<n;i++){
 
    for(let j=m-1; j>=0;j--){
        bag+=(mat[j][i]+ " ")
    }

} console.log(bag)