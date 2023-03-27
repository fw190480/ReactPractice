// Matrix prime number check
// print total number of prime present in the matrix


function matrixPrimeCheck(N, M, arr) {
  //write code here
  let count = 0;
  for(let i=0;i<N;i++){
      for(let j=0;j<M;j++){
          if(primeN(arr[i][j])) count++
      }
  };
  console.log(count);
}

//  this function checking for prime number 
// logic I used the mirror(factor always has a pair) 
function primeN(num){
    if(num<=1) return false;
    if(num==2) return true;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0) return false;
    };
    return true;
};