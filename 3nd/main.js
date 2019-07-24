import {wholeName} from './utils.js';
import {loadDataM, allData} from './resource.js';

export function wholeNameExtended(wN) {
    return `${wN} je sekac :)`;
}

export const preparedWholeName = wholeNameExtended(wholeName);

console.log(preparedAndLoadedName);

loadDataM.done(function(){
    preparedAndLoadedName = `loadDataM ${allData[0]}`;
    $('#main1').html(preparedAndLoadedName);
    console.log(preparedAndLoadedName);
});

export var preparedAndLoadedName = `loadDataM ${allData[0]}`;
