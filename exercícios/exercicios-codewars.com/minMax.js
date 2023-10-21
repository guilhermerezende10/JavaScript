function minMax(arr){
  let maiorEmenor = [arr[0], arr[0]]
  for(i in arr) {
    if (arr[i] > maiorEmenor[1]){
      maiorEmenor[1] = arr[i]
    }
    if(arr[i] < maiorEmenor[0]) {
      maiorEmenor[0] = arr[i]
    }
  }
  return maiorEmenor
}

console.log(minMax([34, 3, 56, 3424]))

