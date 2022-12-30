const sumAll = (nums) => {
  return nums.reduce((initial, next) => {
    return initial + next;
  }, 0);
};

module.exports.sumAll = sumAll;
