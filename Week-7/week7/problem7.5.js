function nextLargerElement(arr, n)
{
    var s = [];
     
    for (var i = 0; i < arr.length; i++)
    {
        while (s.length > 0 && s[s.length - 1]["value"] < arr[i])
        {
            var d = s.pop();
            arr[d["ind"]] = arr[i];
        }
        s.push({"value": arr[i], "ind": i});
    }
     
    while (s.length > 0)
    {
        d = s.pop();
        arr[d["ind"]] = -1;
    }
    return arr;
     
}
 
var arr = [6, 8, 0, 1, 3];
var n = 5;
 
console.log(nextLargerElement(arr, n));