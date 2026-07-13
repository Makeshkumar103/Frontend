function generatePascalTriangle(numRows) {
    const triangle = [];

    for (let row = 0; row < numRows; row++) {
        triangle[row] = [];
        triangle[row][0] = 1; // First element of each row is 1
        for (let col = 1; col < row; col++) {
            triangle[row][col] = triangle[row - 1][col - 1] + triangle[row - 1][col];
        }
        triangle[row][row] = 1; // Last element of each row is 1
    }
    return triangle;
}

const numRows = 5;
console.log(generatePascalTriangle(5))
