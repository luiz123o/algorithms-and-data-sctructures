function duplicateCount(text) {
    //toLowerCase deixo minisculo
    //split eu separo cada letra do texto
    //sort organizo em um array por ordem alfabetica
    //
    console.log(text.toLowerCase().split('').sort().join())


    text = text.toLowerCase().split('').sort().join('');
    let count = i = 0;
    while (i < text.length) {
        // escapar possíveis caracteres especias da regex
        let str = text[i].replace(/[\.*+?^${}()|[\]]/g, '\\$&');
        let len = text.match(str + "+")[0].length;
        len > 1 ? (count++, i += len) : i++;
    }
    return count;
}

console.log(duplicateCount("abbBty"))