class node{
    constructor(value){
        this.value = value;
        this.next = null;
 }
}
const head =new node(5);
const second = new node(10);
const third = new node(15);
const fouth =new node(20);
head.next = second;
second.next = third;
third.next = fouth;
fouth.next = null;
console.log(head.next.next.value);

const printhead = (head) =>{
    let current = head; // Start at head

    while (current !== null) {
        console.log(current.value);
        current = current.next; // Move to next node
    }
}
printhead(head);