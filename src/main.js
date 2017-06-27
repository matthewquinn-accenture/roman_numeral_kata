export const roman_numeral = (num) => {
    // if (num === 1) {
    //    return "I";
    // } else if (num === 2) {
    //     return "II";
    // } else {
    //     return "III";
    // }
    let converted = '';
    for(let i = 0; i < num; i++) {
        converted += 'I';
    }
    return converted;
}