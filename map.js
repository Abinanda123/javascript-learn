const cache = new Map();
cache.set(1,"User data 1");
cache.set("1","User data 2");
console.log(cache.size);
for(const [key, value] of cache){
    console.log(key);
}