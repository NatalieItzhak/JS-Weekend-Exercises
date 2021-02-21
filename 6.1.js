function accum(str){

    let array = str.split("")
    let n = 1

    for (let i = 0; i < array.length; i++) {
        temp = []
        temp.push(array[i].toUpperCase())
        let a = array[i].toLowerCase()

        for (let s = 0; s < n - 1; s++) {
            temp.push(a)
        }
        array[i] = temp.join('')
        n++
    }
    return array.join("-")
}

console.log(accum('javascript'))