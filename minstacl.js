class Minstack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }
    push(x){
        this.stack.push(x);
        const currentMin = this.getMin();
        if (currentMin === null || x <= currentMin) {
            this.minStack.push(x);
        }
    }
    pop(){
        this.stack.pop();
        this.minStack.pop();
    }
    top(){
        return this.stack[this.stack.length - 1];
    }
    getMin(){
        if(this.minStack.length === 0){
            return null;
        }
        return this.minStack[this.minStack.length - 1];
    }
}