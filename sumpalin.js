const check =(arr,target) => {
    let left = 0;
    let right = arr.length - 1;
    while (left<right){
        let sum = arr[left] + arr[right];
        if(sum === target){
            return[left,right];
        
        }
        else if(sum < target){
            left++;
        }
        else{
            right--;
        }
    }
    return null;
}
console.log(check([1,2,3,4,5],5));