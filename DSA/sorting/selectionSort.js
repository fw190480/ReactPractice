// sorting in accending order
// sorting half left hand side
function swap(arr,left,right){
    let temp = arr[left];
    arr[left]=arr[right];
    arr[right]=temp;
}
function selectionSort(arr){
    let N = arr.length;
    for(let i=0;i<N-1;i++){
        let min = i;
        for(let j=i+1;j<N;j++){
            if(arr[min]<=arr[j]) min=j;
        }
        swap(arr,min,i)
    };
    return arr;
};


console.log(selectionSort([1,4,2,35,56,5,2]))


