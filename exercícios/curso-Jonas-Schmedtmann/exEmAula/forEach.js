const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// for(const movement of movements) 
for(const [i, movement] of movements.entries())
{console.log(`Movement ${i + 1}:`, movement > 0 ? 'You deposited ' : 'You withdrew', Math.abs(movement))}

console.log('---------------------------------------------------------')

//                        (element, index, array) ALWAYS NEED TO BE IN THIS ORDER
movements.forEach(function(mov, i, arr) {
    console.log(`Movement ${i + 1}:`, mov > 0 ? 'You deposited ' : 'You withdrew', Math.abs(mov))
})

// 0: function(200)
// 1: function(450)
// 2: function(400)
// 3: function(3000)
// ...