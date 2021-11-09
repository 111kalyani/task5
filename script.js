// a. Print odd numbers in an array
// anonymous function

let arr = [1, 2, 3, 4, 5, 6, 7];
let x = function () {
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            console.log(arr[i]);
        }

    }

}
x();

// // IIFE function
(function () {
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            console.log(arr[i]);
        }

    }

})();

// b. Sum of all numbers in an array
// anonymous function
let add = function (arr1) {
    return arr1.reduce((a, b) => a + b, 0);
};
let arr1 = [1, 2, 3, 4];

let sum = add(arr1);
console.log(sum);

// IIFE function
var arr2 = [1, 2, 3, 4];
(function () {
    var total = 0;
    for (var i in arr2) {
        total += arr2[i];
    }
    console.log(total);
})();


// c. Remove duplicates from an array
// anonymous function
let removeDuplicate = function () {
    let alpha = ["A", "B", "C", "A", "D", "C", "E", "F", "D"];
    let beta = [...new Set(alpha)];
    console.log(beta);
}
removeDuplicate();

// IIFE function
(removeDuplicate = function () {
    let alpha = ["A", "B", "C", "A", "D", "C", "E", "F", "D"];
    let beta = [...new Set(alpha)];
    console.log(beta);
})();


// d. Return all the prime numbers in an array
// anonymous function
let arr7 = [1, 2, 3, 4, 5, 6, 7, 8];

let aprime = function () {
    let num = 0;
    for (let i = 2; i < num; i++) {
        if (num % i === 0)
            return false;

    }
    return num !== 1;
};
let aaprime = arr7.filter(aprime);
console.log(aaprime);


let arrPalin = ["foo", "madam", "racecar", "pineapple", "porcupine", "pineenip", 'pap', 'aaaa'];

// e. Return all the palindromes in an array
// anonymous function

let Arraypalindromes = function () {
    let len = arrPalin.length;
    for (let i = 0; i < len / 2; i++) {
        if (arrPalin[i] == arrPalin[len - i - 1]) {
            console.log(arrPalin[i]);
        }
        else {
            console.log(arrPalin[i]);
        }
    }
}
Arraypalindromes();

// IIFE function
(Arraypalindromes = function () {
    let len = arrPalin.length;
    for (let i = 0; i < len / 2; i++) {
        if (arrPalin[i] == arrPalin[len - i - 1]) {
            console.log(arrPalin[i]);
        }
        else {
            console.log(arrPalin[i]);
        }
    }
})();