
class Node{
   constructor(item)
   {
    this.data = item;
    this.left=this.right=null;
   }
}
let root;

function maxdepth(node)
{
    if(node == null)
    return 0;
    else 
    {
        let leftdepth = maxdepth(node.left);
        let rightdepth = maxdepth(node.right);

    

    if(leftdepth > rightdepth)
    { 
        return (leftdepth+1);
    }
    else{
        return (rightdepth+1);

    }
}
   

}
root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(maxdepth(root));