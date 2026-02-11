class node{
    constructor(value)
    {
        this.value = value;
        this.next = null;
    }
}
const head = new node(5);
head.next = new node(10);
head.next.next = new node(15);
head.next.next.next = null;

const containvalue = (node,target)=>{
    if(node === null) return false;
    if(node.value === target) return true;
    return containvalue(node.next,target);
}
console.log(containvalue(head,10));
console.log(containvalue(head,25));