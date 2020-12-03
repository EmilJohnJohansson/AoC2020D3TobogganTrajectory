fs = require('fs');

function resolveInput(fileName) {
    const data = fs.readFileSync(fileName, 'utf8');
    return data.split('\r\n').map(line => line.split(''));
}

function countTrees(lines, trajactory, speed) {
    var trees = 0;

    for (var i = 0; i < lines.length; i = i + speed) {
        trees = lines[i][trajactory * i % lines[i].length] === '#' ? trees + 1 : trees;
    }

    return trees;
}

// console.log(countTrees(resolveInput('input.txt')));

const input = resolveInput('input.txt');

const multiplied = countTrees(input, 1, 1) * countTrees(input, 3, 1) * countTrees(input, 5, 1) * countTrees(input, 7, 1) * countTrees(input, 0.5, 2);

console.log(multiplied);