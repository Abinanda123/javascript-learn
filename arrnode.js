class node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
const head = new node(1);
head.next = new node(2);
head.next.next = new node(3);
head.next.next.next = null;

 const convertToArray = (head) => {
    const result = [];
    let current = head;
    while (current !== null){
        result.push(current.value);
        current = current.next;
    }
    return result;
 }
 console.log(convertToArray(head));