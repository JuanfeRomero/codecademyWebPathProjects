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

console.log('la funcion _ esta compuesta de la siguiente forma: \n');
console.log(_); 
// Do not write or modify code below this line.
module.exports = _;