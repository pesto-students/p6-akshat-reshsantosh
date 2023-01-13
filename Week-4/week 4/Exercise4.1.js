const PENDING = 0
const FULFILLED = 1
const REJECTED = 2

function customePromise(executor){
    let state = PENDING
    let value = null
    let handlers = []
    let catchers = []

    function resolve(result){
        if(state !== PENDING) return;
        state = FULFILLED
        value = result
        handlers.forEach((h)=> h(value))
    }
    function reject(err){
        if(state!==PENDING) return;
        state = REJECTED
        value = err
        catchers.forEach((c)=> c(value))
    }
    this.then = function(SuccessCallback){
        if(state === FULFILLED){
            SuccessCallback(value)
        }else{
            handlers.push(SuccessCallback)
        }
    }
    this.catch = function(failureCallback){
        if(state===REJECTED){
            failureCallback(value)
        }
        else{
            catchers.push(failureCallback)
        }
    }
    executor(resolve, reject)

}
const doWork = (res, rej) =>{
    k = Math.random()
    if(k%5 == 0){
        setInterval(()=> {res('promise resolved')}, 1000);
    }
    else{
        setInterval(()=> {rej('promise Rejected')}, 1000);
    }
}


let getNumber = new customePromise(doWork)
getNumber.then((val)=>{
    console.log('then log', val)
})
getNumber.catch((val)=> {
    console.log('catch log', val)
})
