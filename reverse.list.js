const reverseList = (head) =>
{
    let prev = null;
    let current = head;
    while(current !== null){
        let nexttemp = current.next;
        current.next = prev;
        prev = current;
        current = nexttemp;
    }
    return prev;
}