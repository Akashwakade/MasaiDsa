let arr=
[
    ["a","b","c"],
    ["d","e","f"],
    ["g","h","i"]
]
let r=3;
let c=3;
//output ==> cbafedihg 
function arrTravesal(){
for(let i=0;i<r;i++){
    for(let j=arr.length-1;j>=0;j--){
        console.log(arr[i][j])
    }
}
}


// console.log(arr)
// arrTravesal()

//z traversal
// function zTraversal(){
// for(let i=0;i<arr.length-1;i++){
//     for(let j=0;j<arr.length-1;j++){
//         if(i%2==0){
//             for(let j=arr.length-1;j>=0;j--){
//                 console.log(arr[i][j])
//             }
//         }
//     }
// }
// }
// zTraversal()  not get

//
