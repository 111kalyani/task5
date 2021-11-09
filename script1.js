// a. Print odd numbers in an array
// arrow function
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let printOdd = array.filter((ele) => {
    return (ele % 2 !== 0);

});
console.log(printOdd);


// b. Sum of all numbers in an array
// arrow function
let totalSum = array.reduce((a, b) => a + b, 0);
console.log(totalSum);


// c. Return all the prime numbers in an array
// arrow function
let prime = num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0)
            return false;
    }
    return num !== 1;
};

let primeArray = array.filter(prime);
console.log(primeArray);



// d. Return all the palindromes in an array
// arrow function
let arrPali = ["foo", "madam", "racecar", "pineapple", "porcupine", "pineenip", 'pap', 'aaaa'];

let palindromes = arrPali.filter(word => {
    let len = word.length;
    for (let i = 0; i < len / 2; i++) {
        if (word[i] == word[len - i - 1]) {
            return true;
        }
        else {
            return false;
        }
    }
});
console.log(palindromes);