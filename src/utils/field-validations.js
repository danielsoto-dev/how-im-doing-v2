const EMPTY_STRING_REGEX = '^$';
const VALID_NUMBER_REGEX = '^[0-9]+[.]?[0-9]*';

const VALID_PERCENTAGE_REGEX = `${VALID_NUMBER_REGEX}%?`;
export const isValidPercentage = (string) => {
    const pattern = new RegExp(
        `${VALID_PERCENTAGE_REGEX}$|${EMPTY_STRING_REGEX}`
    ); //disable-eslint
    const isAMatch = pattern.test(string);
    return isAMatch;
};
export const isValidNumber = (string) => {
    const pattern = new RegExp(`${VALID_NUMBER_REGEX}$|${EMPTY_STRING_REGEX}`);
    const isAMatch = pattern.test(string);
    return isAMatch;
};
/**
 * 20
 * 20%
 * 10%
 * 1%
 * 122
 */
