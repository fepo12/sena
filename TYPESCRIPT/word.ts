function countWordOccurreences(text: string, word: string): number {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    return (text.match(regex) || []).length;
}

const text = "Typescript is great. Typescript is fun.";
console.log(countWordOccurreences(text, 'Typescript'));//2