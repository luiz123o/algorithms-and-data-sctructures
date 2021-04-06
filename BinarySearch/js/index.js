function binarySearch(list, target) {
    let first = 0
    let last = list.length - 1

    while (first <= last) {
        const midpoint = first + Math.floor((last - first) / 2)

        if (list[midpoint] === target) {
            return midpoint;
        }
        if (list[midpoint] < target) {
            first = midpoint + 1
        } else {
            last = midpoint - 1
        }

    }
    return -1
}
const valueList = ['José', 56, 12, 43, 95, 'Luiz', 8, 67]

console.log(binarySearch(valueList, 'José'))