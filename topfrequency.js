const topKfrequency =(nums,k) => {
    const map = new Map();
    for(let n of nums){
        map.set(n,(map.get(n) || 0) + 1);
    }
    const sorted =[...map.entries()].sort((a,b)=>b[1]-a[1]);
    return sorted.slice(0,k).map(pair =>pair[0]);
}
console.log(topKfrequency([1,1,1,2,2,3],2));