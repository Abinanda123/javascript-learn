const minsubarrayname = (arr, target) => {
    let minLength = Infinity;
    let left = 0;
    let sum = 0;
    for (let right = 0; right < arr.length; right++) {
        sum += arr[right];
        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            sum -= arr[left];
            left++;
        }
    }
    return minLength === Infinity ? 0 :minLength;
};
console.log(minsubarrayname([2,3,1,2,4,3], 7)); // Output: 2