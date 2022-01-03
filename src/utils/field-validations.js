export const isValidPercentage = (string) => {
    return true;
    const pattern = new RegExp('^[0-9]*%?$');
    const isAMatch = pattern.test(string);
    console.log(isAMatch);
    return isAMatch;
};
export const isValidNumber = (string) => {
    const number = Number(string);
    if (number === NaN) {
        return false;
    }
    return true;
};
/**
 * 20
 * 20%
 * 10%
 * 1%
 * 122
 */
