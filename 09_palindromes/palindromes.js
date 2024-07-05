const palindromes = function (string) {
    let i = 0, j = string.length - 1;

    for(i; i <= string.length / 2; i++) {
        if (string.slice(i, i+1) != string.slice(j, j+1)) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
