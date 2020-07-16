var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        let ans = [];
        ans.push(i);
        ans.push(j);
        return ans;
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 17));
