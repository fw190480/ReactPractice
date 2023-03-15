// bubble sort algorithum
// compare adjecent element and swap them 
// sorting half create to right hand side

function swap(arr,left,right){
    let temp = arr[left];
    arr[left]=arr[right];
    arr[right]=temp;
}
function bubbleSort(arr){
    let N = arr.length;
    for(let i=0;i<N-1;i++){
        for(let j=0;j<N-1-i;j++){
            if(arr[j]<=arr[j+1]) swap(arr,j,j+1);
        }
    };
    return arr;
};
let marks = [23,435,35,1,7,8,8,0,6,544];
console.log(bubbleSort(marks))