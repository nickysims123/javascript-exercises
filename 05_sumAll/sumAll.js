const sumAll = function(...args) {
    for(let j = 0; j < args.length; j++) {
        console.log(args[j]);
        if (!(Number.isInteger(args[j])) || args[j] < 0) return 'ERROR';
    }
    let sum = 0;

    for (let i = 0; i < Math.max(...args); i++) {
        sum = sum + Math.min(...args) + i;
    }

    return sum;
};

sumAll(-24,10);

// Do not edit below this line
module.exports = sumAll;
