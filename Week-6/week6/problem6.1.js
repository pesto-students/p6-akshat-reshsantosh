
// const maxsubarray = (arr, n)=>{

//    const presentsum = 0;
//    const maxsum = 0;
//    for(let i=0; i<n; i++){
//        presentsum = presentsum + arr[i];
//        if(maxsum < presentsum)
//        {
//         maxsum = presentsum;
//        }
//        if(presentsum<0)
//        {
//         presentsum = 0;
//        }

//    }
//  console.log(maxsum);
// }
// var arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4] 
// const n = arr.length
// maxsubarray(arr, n)

function maxSubArraySum(a , size) {
    var max_so_far = Number.MIN_VALUE, max_ending_here = 0, start = 0, end = 0, s = 0;

    for (i = 0; i < size; i++) {
        max_ending_here += a[i];

        if (max_so_far < max_ending_here) {
            max_so_far = max_ending_here;
            start = s;
            end = i;
        }

        if (max_ending_here < 0) {
            max_ending_here = 0;
            s = i + 1;
        }
    }
   console.log("Maximum contiguous sum is " + max_so_far);
   
}
 
    var a = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
    var n = a.length;
    maxSubArraySum(a, n);