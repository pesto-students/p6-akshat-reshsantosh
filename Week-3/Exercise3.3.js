function createIncrement(){   /*function have nested function were inside nested function the count to be added where it is decleared as 0  */
    let count = 0;             /*  message will be the output which is in second function but not incremented count in first funtion  though we return both the funtions */
    function increment(){      
        count++;
                     /* if we mention console.log(count) it can give an output by incrementing 3 times */
    }
    let message = `Count is $(count)`;
    function log(){
        console.log(message);
    }
    return[increment, log];
}
const[increment, log]=createIncrement();

increment();             /* As increment function is called 3 times then count should be added 3 times  */
increment();
increment();            /* function log() have an output of message so we get an output (message) */
log();

