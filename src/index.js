
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) return [];

    return matrix.reduce((prev, curr, i) => prev.concat((i % 2 === 0) ? curr : curr.reverse()), []);
}
