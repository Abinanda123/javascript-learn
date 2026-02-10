class node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
const head = new node(5);
const second = new node(10);
head.next = second;
second.next = null;
let current = head; // Start at head

while (current !== null) {
    console.log(current.value);
    current = current.next; // Move to next node
}