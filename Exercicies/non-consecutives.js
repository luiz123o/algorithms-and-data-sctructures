function fisrtNonConsecutive(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        const curr = arr[i]
        const next = arr[i + 1]

        if (curr + 1 !== next) {
            return next
        }
    }
    return null
}
console.log(fisrtNonConsecutive([1, 2, 3, 4, 6, 7]))

/**
 * outro modo
 */

function fisrtNonConsecutive2(arr) {
    let result = arr.find((value, index) => value !== index + arr[0])
    return (Number.isInteger(result)) ? result : null
}
console.log(fisrtNonConsecutive2([1, 2, 3, 4, 6, 7]))