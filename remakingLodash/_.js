const _ = {};
_.clamp = (number, lowerBound, upperBound) =>{
    if(number < lowerBound){
        return lowerBound;
    }else if(number > upperBound){
        return upperBound;
    }else{
        return number;
    }
};




console.log('la funcion _ esta compuesta de la siguiente forma: \n');
console.log(_); 
// Do not write or modify code below this line.
module.exports = _;