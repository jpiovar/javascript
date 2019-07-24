export const allData = [];

export var loadDataM = $.getJSON('data.json', function (data) {
    allData.push(data.name);
});