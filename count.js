const countChars = (str) => {
  const counts = {};
    for(const char of str){
        if(char ==="")continue;
        if(counts[char])
            counts[char]+=1;
        else            
            counts[char] = 1;


    }
    return counts;
}
console.log(countChars("hello world"));