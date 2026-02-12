

const isfoundBad = (version) =>{
    return version >=4;
}
const solution = (n) =>{
    let left = 1;
    let right =n;
    let firstBad = -1;
    while(left <=right){
        let mid = Math.floor((left+right)/2);
        if(isfoundBad(mid)){
            firstBad = mid;
            right = mid-1;
        }else{
            left = mid+1;
        }
    }
    return firstBad;
}
console.log(solution(5)); // Output: 4