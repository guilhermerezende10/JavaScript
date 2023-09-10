const arr = [34, 5, 3, 43, 5, 34, 5, 6, 37, 7, 5, 765, 4,5 ,4 , 56, 67, 89, 3, 45, 1]

let i = 0
let j = 1

let aux = arr[i]
arr.splice(i, 1, arr[j])
arr.splice(j, 1, aux)


console.log(arr)