
exports.min = function min (array) {
    if ((array === undefined) ||  (array === null) || (array[0] === undefined)) {
        return 0;
    } else {
        let result = array[0];
        for(let i = 0; i < array.length; i++) {
        if (result > array[i]) {
            result = array[i];
        }
    }
    return result;
    }
}

exports.max = function max (array) {
    
    if ((array === undefined) ||  (array === null) || (array[0] === undefined))
      return 0;
  
    return array.reduce(function (current, next) {
        return ( current > next ? current : next );
    });
}

exports.avg = function avg (array) {
    if ((array === undefined) ||  (array === null) || (array[0] === undefined)) {
        return 0;
    } else {
        let result = 0;
        let count = 0;
        for(let i = 0; i < array.length; i++) {
        result = result + array[i];
        count++;
    }
        return result/count;
    }
}
