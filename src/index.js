module.exports = function reverse (n) {
    n = Math.abs(n)
    const result = n.toString(10).split('').reverse().join('')
    return result;
}
