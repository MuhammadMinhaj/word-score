import data from '../data';

const methods = {};

methods.getArrayParseByCommas = (str) => {
    const arr = str.split(',').map((elm) => elm.trim());
    return arr;
};

methods.getArrayParseBySpaces = (str) => {
    const arr = str.split(' ');
    return arr;
};

methods.getArrayParseWord = (str) => {
    const arr = str.split('');
    return arr;
};

methods.getPercentageOnWord = (word) => {
    const alphabets = word.split('');
    let total = 0;
    alphabets.forEach((alpbt) => {
        if (alpbt !== '') {
            total += data[alpbt];
        }
    });
    return total;
};

export default methods;
