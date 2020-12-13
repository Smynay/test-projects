const fs = require('fs');

let launchType = process.argv[2] || 'default';
let table;
let isTableGenerated = 0;

switch (launchType) {
  case 'default':
    table = generateArray();
    table = generateMap();

    console.log('---Initial---');
    table.map((row) => console.log(row));

    isTableGenerated = 1;
    break;

  default:
    let fileContent = fs.readFileSync('./' + launchType, 'utf8');
    let m = fileContent.split(' ');
    let n = m[0].length;
    m = m.length;

    table = generateArray(m, n);
    table = fileContent
      .split(' ')
      .map((string, stringIndex) =>
        string
          .split('')
          .map(
            (bit, bitIndex) => (table[stringIndex][bitIndex] = bit == 1 ? 1 : 0)
          )
      );

    console.log('---Initial---');
    table.map((row) => console.log(row));

    isTableGenerated = 1;
    break;
}

setInterval(() => {
  table = generateMap();
  console.log('-------------');
  table.map((row) => console.log(row));
}, 1000);

const positions = {
  tl: [-1, -1],
  t: [0, -1],
  tr: [1, -1],
  cl: [-1, 0],
  c: [0, 0],
  cr: [1, 0],
  bl: [-1, 1],
  b: [0, 1],
  br: [1, 1],
};

function generateArray(m = getTrueRandom(3, 5), n = getTrueRandom(3, 5)) {
  let arr = new Array(m);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(n);
    for (let k = 0; k < arr[i].length; k++) {
      arr[i][k] = 0;
    }
  }

  return arr;
}

function generateMap() {
  return table.map((row, rowIndex) =>
    row.map((ceil, colIndex) =>
      isTableGenerated == 1
        ? generateCeil(rowIndex, colIndex)
        : getTrueRandomBit()
    )
  );
}

function generateCeil(posY, posX) {
  function getValueOn(position = 'c') {
    return getCeilValueOn(posY, posX, position);
  }

  let neighbors = [
    getValueOn('tl'),
    getValueOn('t'),
    getValueOn('tr'),
    getValueOn('cl'),
    getValueOn('cr'),
    getValueOn('bl'),
    getValueOn('b'),
    getValueOn('br'),
  ];

  let aliveNeighborsCount = neighbors.reduce((sum, value) => sum + value);

  if (aliveNeighborsCount == 3 && !getValueOn()) {
    return !getValueOn() ? 1 : 0;
  } else if (aliveNeighborsCount < 2 || aliveNeighborsCount > 3) {
    return 0;
  } else {
    return getValueOn();
  }
}

function getCeilValueOn(y, x, position = 'c') {
  const coordinates = positions[position];

  const ceilY = y + coordinates[1];
  const ceilX = x + coordinates[0];

  if (
    ceilX >= 0 &&
    ceilY >= 0 &&
    ceilX < table[0].length &&
    ceilY < table.length
  ) {
    return table[ceilY][ceilX];
  } else {
    return 0;
  }
}

function getTrueRandom(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

function getTrueRandomBit() {
  return getTrueRandom(0, 1);
}
