function linearSearch(list, target) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === target) {
            console.log(i)
            return i
        }

    }
    return -1


}
const valueList = ['José', 56, 12, 43, 95, 'Luiz', 8, 67]

console.log(linearSearch(valueList, 'José'))