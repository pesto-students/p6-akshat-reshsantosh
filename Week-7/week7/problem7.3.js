let head; 
class Node
{
    constructor(d)
    {
        this.data = d;
        this.next = null;
    }
}
 
function push(new_data)
{
     
    let new_node = new Node(new_data);
    new_node.next = head;
 
    head = new_node;
}
 
function detectLoop()
{
    let slow_p = head, fast_p = head;
    let flag = 0;
     
    while (slow_p != null && fast_p != null &&
           fast_p.next != null)
    {
        slow_p = slow_p.next;
        fast_p = fast_p.next.next;
        if (slow_p == fast_p)
        {
            flag = 1;
            break;
        }
    }
    if (flag == 1)
        console.log("Loop Found");
    else
        console.log("No Loop");
}
 
push(20);
push(4);
push(15);
push(10);
 
head.next.next.next.next = head;
 
detectLoop();