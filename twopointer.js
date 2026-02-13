const maxsumarray =(arr,target) =>{
    let currentSum = 0;
    let maxSum = 0;
    for(let i=0; i<arr.length; i++){
        currentSum += arr[i];
    }
    maxSum = currentSum;
    for(let i = target; i<arr.length; i++){
        currentSum += arr[i] - arr[i-target];
        maxSum = Math.max(maxSum,currentSum);
    }
    return maxSum;
}
console.log(maxsumarray([1,2,3,4,5],2));