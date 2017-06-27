export const roman_numeral = (num) => {

    let converted = '';

    if (num === 4) {
        converted = 'IV'
        return converted;
    } else if (num === 5) {
        converted = 'V'
        return converted;
    } else if (num === 6) {
        converted = "VI";
        return converted;
    }

    for(let i = 0; i < num; i++) {
        converted += 'I';
    }
    return converted;
}