
const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

const classGraph = [
  //[a,b,c,d,e,f,g,h]
    [0,2,0,4,0,0,0,0],
    [0,0,1,0,10,2,0,0],
    [9,0,0,0,8,0,0,0],
    [0,0,2,0,0,0,0,0],
    [0,0,0,7,0,0,1,0],
    [0,0,0,0,0,0,0,3],
    [0,0,0,0,4,2,0,0],
    [0,0,0,0,0,0,4,0]
]

assert(JSON.stringify(dijkstra(classGraph, 2)) == JSON.stringify([9,11,0,13,8,11,9,14]));
assert(JSON.stringify(dijkstra(classGraph, 0)) == JSON.stringify([0,2,3,4,11,4,11,7]));
assert(JSON.stringify(dijkstra(classGraph, 1)) == JSON.stringify([10,0,1,14,9,2,9,5]));
assert(JSON.stringify(dijkstra(classGraph, 2)) == JSON.stringify([9,11,0,13,8,11,9,14]));
assert(JSON.stringify(dijkstra(classGraph, 3)) == JSON.stringify([11,13,2,0,10,13,11,16]));
assert(JSON.stringify(dijkstra(classGraph, 4)) == JSON.stringify([18,20,9,7,0,3,1,6]));
assert(JSON.stringify(dijkstra(classGraph, 5)) == JSON.stringify([29,31,20,18,11,0,7,3]));
assert(JSON.stringify(dijkstra(classGraph, 6)) == JSON.stringify([22,24,13,11,4,2,0,5]));
assert(JSON.stringify(dijkstra(classGraph, 7)) == JSON.stringify([26,28,17,15,8,6,4,0]));

const randomMatrix = [
    [0, 5, 0, 0, 0],
    [5, 0, 9, 0, 0],
    [0, 9, 0, 0, 0],
    [0, 0, 0, 0, 10],
    [0, 0, 0, 10, 0]
]

assert(JSON.stringify(dijkstra(randomMatrix, 0)) == JSON.stringify([0,5,14,Infinity,Infinity]));
assert(JSON.stringify(dijkstra(randomMatrix, 1)) == JSON.stringify([5,0,9,Infinity,Infinity]));
assert(JSON.stringify(dijkstra(randomMatrix, 2)) == JSON.stringify([14,9,0,Infinity,Infinity]));
assert(JSON.stringify(dijkstra(randomMatrix, 3)) == JSON.stringify([Infinity,Infinity,Infinity,0,10]));
assert(JSON.stringify(dijkstra(randomMatrix, 4)) == JSON.stringify([Infinity,Infinity,Infinity,10,0]));
