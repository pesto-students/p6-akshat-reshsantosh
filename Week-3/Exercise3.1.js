// Creating Memorize function to improve out put delay 
const Memorize = (fn) => {
    const cache = {};
    return function(...args){
        if(cache[args]){
            return cache[args]
        }
        const result = fn(...args)
        cache[args] = result;

    };
     
        
    };
const Delayfunc = num => {
    for(let i=0; i<=0; i++)
    {
        if(i===num){
            return i;
        }
    }
};
const newfunc = Memorize(Delayfunc);
console.time();
console.log(newfunc(1231230));
console.timeEnd();

console.time();
console.log(newfunc(1231230));
console.timeEnd();