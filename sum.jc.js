const arr=[1, 2, 3, 4, 5];
const sum = (n) =>{
    let total=0;
    for(const num of n){
        total+=num;
    }
    return total;
}
console.log(sum(arr));