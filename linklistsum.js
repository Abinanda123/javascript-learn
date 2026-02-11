class node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
const head = new node(1);
head.next = new node(2);
head.next.next = new node(3);   

const sum = (head) =>{
    if(head === null) return 0;
    return head.value + sum(head.next);
}
console.log(sum(head));




