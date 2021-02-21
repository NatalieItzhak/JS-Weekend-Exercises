
function distinct(a, b) {

    a = a.toLowerCase()
    b = b.toLowerCase()
    let s = a + b
    let array = s.split('')

    let z = array.length
    for (let i = 0; i < z; i++) {

        let x = array[i]
        array = array.filter(a => a !== x)
        z = array.length
        array.unshift(x)

    }

    array.sort()

    return array.join("")
}

console.log(distinct('natalie', 'itzhak'))


