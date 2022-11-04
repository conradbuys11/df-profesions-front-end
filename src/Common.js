const test = () => {
    return "Hello, world!"
}

const keyToWords = word => {
    let regex = word.matchAll(/[A-Z][a-z]*/g);
    let words = []
    for(let word of regex){
        //regex iterator is wack, it's an array of arrays
        //if we iterate through each array, taking that [0] gives the word
        words.push(word[0]);
    }
    return words.join(" ");
}

const largeIconToMedium = icon => {
    return icon.replace(/large/g, "medium");
}

export { test, keyToWords, largeIconToMedium }