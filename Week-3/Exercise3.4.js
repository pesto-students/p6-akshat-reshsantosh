function createStack()
 {
 this.items=[];
    return{
       
        push(number)                    
         {
            items.push(number)
        },
        pop(number) 
        {
           items.pop(number)
               /* it throws an error as stack is not defined */
        }
       
    }
};
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();
console.log(stack.items);
// we get undefind as encapuslated 