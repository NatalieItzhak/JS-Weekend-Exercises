function maskify(str) {

    let array = str.split("")

    for (let i = 0; (array.length - 4) > i; i++) {
        array[i] = '#'
    }

    newStr = array.join("")
    return newStr
}


console.log(maskify('32796y2389403275fbb'))