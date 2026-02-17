const isValid = (n) =>{
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for(let char of n){
        if(map[char]){
            stack.push(map[char]);
            }
        else{
            const top =stack.pop();
            if(char !== top){
                 return false;
                }
            }
        }
        return stack.length === 0;

  }
  console.log(isValid("(){}[]")); // true
