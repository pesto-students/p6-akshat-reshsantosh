var threeSumClosest = function(nums, target) {
    var n = nums.length - 1,
      sum = 0,
      result = 0,
      difference = Infinity;
    
    nums.sort((a, b) => a - b);
  
    for (let i = 0, left = 1, right = n; i < n - 1; left = ++i + 1, right = n) {
      if (nums[i] === nums[i - 1]) continue;
  
      while (left < right) {
        sum = nums[i] + nums[left] + nums[right];
        
        if (sum === target) return target;
        else if (sum > target) right--;
        else left++;
        
        if (difference > Math.abs(target - sum)) {
          result = sum;
          difference = Math.abs(target - sum);
        }
      }
    }
    return result;
  };

  nums = [-1, 2, 1, -4]
  target = 1
  let out = threeSumClosest(nums, target);
  console.log(out)