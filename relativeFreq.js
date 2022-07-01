//Calculation of a relative frequency 

//First the sum of all frequencies needs to be obtantained
//In this case it is passed as an array to a function that returns the sum
function sumFrequencies(arr){
    return arr.reduce((a, b) => a + b, 0)
}

let households = [15, 14, 14, 4, 3]

//console.log('sum of all frequencies:  ' + sumFrequencies(households)) // this will log the sum to console
let sum = sumFrequencies(households)

//Having the sum of all frequencies, we can use an array to place all of the sample types
let numberOfChildrenUnderFive = [0, 1, 2, 3, 4]

//The following funtion uses the above function and the array with observation classes to provide the 
//relative frequency
function relFreq(sumFreqs, elArr, resultArr){
    for(let i = 0; i < elArr.length; i++){
        resultArr.push((elArr[i] / sumFreqs).toFixed(2))
    }
}
let resArr =[]
relFreq(sum, households, resArr)

console.log(resArr)