//my first generator
function* countMaker() {
    let count = 0;
    while (count <4) {
        yield count +=1;
    }
}

let countGen= countMaker()
console.log(countGen.next().value)

console.log(countGen.next().value)
console.log(countGen.next().value)
console.log(countGen.next().value)
