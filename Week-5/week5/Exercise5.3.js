let sam = new Set();
// let arr = [1, 2, 4, 4, 5, 7, 7]
// const arr = new Array([1, 2, 4, 4, 5, 7, 7]);



let hasduplicate = (arr) =>{
    const n = arr.length
    
   for(let i=0; i<n; i++)
   {
        sam.add(arr[i])
   }
   if(sam.size === n)
   {
      console.log("true")
   }
   else{
    console.log("false")
   }
}
hasduplicate([1, 2, 4, 5, 7]);


