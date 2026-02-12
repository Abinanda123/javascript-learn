const binarysearch =(arr, target) =>{
    let left =0;
    let right=arr.lenght-1;
    while(left<=right){
        const mid = Math.floor((left+right)/2);
        const guess = arr[mid];
        if(guess===target){
            return mid;
        }
        if(guess>target){
            right=mid-1;
        }
        else{
            left=mid+1;
        }
    }
    return -1;
};
primes = [2, 3, 5, 7, 11, 13, 17];
console.log(binarysearch(primes,11)); // Output: 4
