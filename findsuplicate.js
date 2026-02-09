const arr=[2, 5, 1, 2, 3, 5, 1, 2, 4];
const findFirstDuplicate = (arr) => {
const seen={};
    for (const n of arr) {
        if (seen[n]){
         return n;
     }
    seen[n]=true;
    }
    return undefined;
}   
console.log(findFirstDuplicate(arr));