function wave(str) {
    str = str.toLowerCase()
    let result = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            let waveStr = str.substring(0, i) + str[i].toUpperCase() + str.substring(i + 1)
            result.push(waveStr)
        }
    }
    return result
}

  console.log(wave("Guilherme"))