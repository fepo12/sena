function countWordOccurreences(text, word) {
    var regex = new RegExp("\\b".concat(word, "\\b"), 'gi');
    return (text.match(regex) || []).length;
}
var text = "Typescript is great. Typescript is fun.";
console.log(countWordOccurreences(text, 'Typescript')); //2
