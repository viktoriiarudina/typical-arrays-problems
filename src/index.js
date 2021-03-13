
exports.min = function min (array) {
    return typeof array !== 'undefined' && array.length > 0 ?  Math.min( ...array ) : 0;
}

exports.max = function max (array) {
    return typeof array !== 'undefined' && array.length > 0 ? Math.max( ...array ) : 0;
}

exports.avg = function avg (array) {
    return typeof array !== 'undefined' && array.length > 0 ? array.reduce((a, b) => a + b) / array.length : 0;
}
