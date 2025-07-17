// problem statemet

//You are given a matrix of N rows and M columns.
//you are given a position (x,y) of an element in the matirx.
//you have to print all elements which lie on the same diagonal (both left and right)

let mat=[[1,2,3],
         [4,5,6],
         [7,8,9]]

        let m=3;
        let n=3;

 let x=2;
 let y=1;
 //output= 4,8,6,8

 //print all elements on left diagonal
 //go to all the elements
 
 let Lbag="";;
 let Rbg=""
 for(let i=0;i<m;i++){
    for(let j=0;j<n;j++){
    //   console.log(mat[i][j]) checking if I am getting all the elements.
    //for left diagonal row-colum will be same
    if(i-j==x-y){
      Lbag+=(mat[i][j]+" ")
    //   console.log(`left diagonal==>${Lbag}`)
    }
    //for right diagonal row+colum will be same
    if((i+j)==(x+y)){
      Rbg+=(mat[i][j]+" ")

            //   console.log(`right diagonal==>${Rbg}`)

    }
    }
 } console.log(Lbag,Rbg)