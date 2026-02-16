const merge = (arr1,arr2) =>{
    const sorted=[];
    while(arr1.length && arr2.length){
        if(arr1[0]<arr2[0]){
            sorted.push(arr1.shift());
        }else{
            sorted.push(arr2.shift());
        }
    }
    return [...sorted,...arr1,...arr2];
}
const mergeSort = (arr) =>{
    if(arr.length<=1) return arr;
    const mid =Math.floor(arr.length/2);
    const left = mergeSort(arr.slice(0,mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left,right);
}
console.log(mergeSort([5,3,8,1,2]));