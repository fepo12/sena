function filterParis(numbers) {
    return numbers.filter(function (num) { return num % 2 === 0; });
}
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var paris = filterParis(numbers);
console.log(paris);
