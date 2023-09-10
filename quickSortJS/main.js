const arr = [34, 5, 3, 43, 67, 15, 9, 6, 76, 7, 10, 765, 4, 5454, 76 , 56, 5434, 34,356456,7 ,678, 78, 9,754,6 ,34,5 ,67,5, 8, 8, 4,65, 89, 14, 45, 1]

const copiarArr = (arr) => {
    const arrObj = {array: arr, x: 0}

    quickSort(arrObj, 0, arr.length - 1)

    return arrObj.array
}

const quickSort = (copiarArr, Iinicial, Ifinal) => {
    if (copiarArr.x >= 6000 || Iinicial == Ifinal) {
        ////return
    }

    if (Iinicial < Ifinal) {
        var pivo = Math.floor((Iinicial + Ifinal) / 2)//Iinicial + Math.floor(Math.random() * (Ifinal - Iinicial))
        let i = Iinicial
        let j = Ifinal

        console.log(Iinicial, Ifinal, pivo)

        while(i <= j){
            while(copiarArr.array[i] < copiarArr.array[pivo]) {
                i++
            }
            
            while (copiarArr.array[j] > copiarArr.array[pivo]) {
                j--
            }

            if (i <= j) {
                //console.log(i, j, pivo)
                var aux = copiarArr.array[i]
                copiarArr.array.splice(i, 1, copiarArr.array[j])
                copiarArr.array.splice(j, 1, aux)

                i++
                j--
            }
        }

        copiarArr.x++

        //console.log(copiarArr, Iinicial, pivo)

        quickSort(copiarArr, Iinicial, j)
        quickSort(copiarArr, i, Ifinal)
    }
} 

console.log(copiarArr(arr))
