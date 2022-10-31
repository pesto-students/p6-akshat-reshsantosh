// Bind - which can be said as one of the method comes under Explicit binding 

// simple programme to illustrate how bind works

function addition(a, b){
    return this.a + this.b;
}

// now we write a different function so that will try to bind with parameters passed in other function
 const Newfunc = addition.bind({a: 21, b: 27});
 console.log("Bind method")
 console.log(Newfunc())
 console.log(addition === Newfunc) ;
//  by this we can know that both are not same funtions 


// call function

function callfunc(){
    var output =[
        this.person,
        "is from Hyd",  /* just normal funtion to show this key work changes to objects after using call */
       this.age
    ].join(' ');
    console.log("call method")
    console.log(output);
}
// this.person have a value in callfunc function but this.age have assigned its value in the obj funtion and called using call method 
var obj = {
    person: 'suman', age:"and he is 12 years old"
};
callfunc.call(obj);
// we can also create similar to obj funtions to assign different values to callfunc

// Apply method
// it is recomended to use .apply method when we use arrays 
var numbers = [1,2,4,5,6]
var max = Math.max.apply(null, numbers);
console.log(".apply method")
console.log(max);

