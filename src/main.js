export const roman_numeral = (inputNum) => {

    let romanNum = '';
    let conversionTable = {
        "X" : 10,
        "IX": 9,
        "V" : 5,
        "IV": 4,
        "I" : 1
    };

    if (inputNum <= 0) {
        throw new Error('Input number should be greater than 0.');
    }

    for(let i in conversionTable) {
        let conversionValue = conversionTable[i];

        while(inputNum >= conversionValue){
            romanNum += i;
            inputNum -= conversionValue;
        }
    }
    return romanNum;
}