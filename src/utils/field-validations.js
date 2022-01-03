export const isValidPercentage = (string) => {
    const pattern = new RegExp('[1-9][0-9]*%?');
    const isAMatch = pattern.test(string);
    console.log(isAMatch);
    return isAMatch;
};
/**
 * 20
 * 20%
 * 10%
 * 1%
 * 122
 */
