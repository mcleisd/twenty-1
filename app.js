var c = 0

do {
    var r = Math.floor(Math.random() * 10) + 1
    c = c + r
    console.log(`New number is ${r}. New total is ${c}.`)
} while (c < 16)

console.log("We have escaped our loop.")