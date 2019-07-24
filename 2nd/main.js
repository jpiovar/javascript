import {wholeName} from './utils.js';
import {loadDataM} from './resource.js';

export function wholeNameExtended(wN) {
    return `${wN} je sekac :)`;
}

export const preparedWholeName = wholeNameExtended(wholeName);