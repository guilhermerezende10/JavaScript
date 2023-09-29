function removeEveryOther(arr){
    for (var i = 1; i < arr.length;i++){
        arr.splice(i,1);
    }
    return arr;
  }

console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))