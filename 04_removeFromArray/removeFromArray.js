const removeFromArray = function(arr, ...nums) {
    let result = [];

    arr.forEach(element => {
        if (!nums.includes(element)) {
            result.push(element);
        }
    });

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
