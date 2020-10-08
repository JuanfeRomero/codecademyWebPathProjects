const _ = {};
_.clamp = (number, lowerBound, upperBound) =>{
    if(number < lowerBound){
        return lowerBound;
    }else{
        return number > upperBound? upperBound: number;
    }
};

_.inRange = (num, start, end) =>{
    tempValue = 0;
    if(typeof end === 'undefined'){
      end = start;
      start = tempValue;
    }
    if(start > end){
      tempValue = start;
      start = end;
      end  = tempValue;
    }
    return num >= start && num < end;
}

_.words = str =>{
    return str.split(' ')
};

_.pad = (str, lng) => {
    if(str.length >= lng){
      return str;
    }
    const padLength = lng- str.length;
    let leftPad = Math.floor(padLength/2);
    let rightPad = padLength-leftPad;
    while(rightPad > 0){
      if(leftPad > 0){
        str = ' ' + str;
        leftPad--;
      }
      str = str + ' ';
      rightPad--;
    }
    return str;
};

_.has = (obj, key) => {
    return key in obj;
}

_.invert = obj =>{
    let newObj = {};
    for(let key in obj){
        newObj[obj[key]] = key;
    }
    return newObj;
}

_.findKey = (obj, predicate) =>{
    for(let key in obj){
        if(predicate(obj[key])){
            return key;
        }
    }
    return undefined;
};

_.drop = (arr, drop =1) => {
    return arr.length <= drop? [] : arr.slice(drop);
  };

_.dropWhile = (arr, predicate) => {
    let sliceStart = 0;
    while(predicate(arr[sliceStart], sliceStart, arr)){
        sliceStart++;
    };
    return arr.slice(sliceStart);
};

_.chunk = (arr, size =1) => {
    let reArr = [];
    let sliceStart = 0;
    if(size === 1){
        arr.forEach(elem =>{reArr.push([elem])});
        return reArr;
    }
    while(sliceStart < arr.length){
        reArr.push(arr.slice(sliceStart, size));
        sliceStart = size;
        size = size+size;
    }
    return reArr;
};

//console.log('la funcion _ esta compuesta de la siguiente forma: \n');
//console.log(_); 
// Do not write or modify code below this line.
module.exports = _;