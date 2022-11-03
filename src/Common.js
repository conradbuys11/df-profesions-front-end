const test = () => {
    return "Hello, world!"
}

const keyToWords = word => {
    let words = word.matchAll(/[A-Z][a-z]*/)
    return words.join(" ");
}

export { test, keyToWords }