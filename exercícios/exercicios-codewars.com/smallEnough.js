const smallEnough = (a, limit) => Math.max(...a) <= limit;

console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100));
