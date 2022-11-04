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
    // TO-DO: SWITCH STATEMENT FOR SOME SPECIAL CASES
    // ie E Z Thro should be EZ-Thro
    // anything with an apostrophe (it won't have an apostrophe as a key!), ie Artisan's Consortium
    return words.join(" ");
}

const largeIconToMedium = icon => {
    return icon.replace(/large/g, "medium");
}

export { test, keyToWords, largeIconToMedium }