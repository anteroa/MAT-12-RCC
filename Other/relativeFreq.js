//Calculation of a relative frequency 

//First the sum of all frequencies needs to be obtantained
//In this case it is passed as an array to a function that returns the sum
function sumFrequencies(arr){
    return arr.reduce((a, b) => a + b, 0)
}

let observations = [13,11,0,1]


let sum = sumFrequencies(observations)
console.log('Sum: ' + sum)

//The following funtion uses the above values to provide the relative frequency
function relFreq(sumFreqs, elArr, resultArr){
    for(let i = 0; i < elArr.length; i++){
        resultArr.push((elArr[i] / sumFreqs).toFixed(3))
    }
}
let resArr =[]
relFreq(sum, observations, resArr)

console.log('Relative Freq. Distribution:\n')
console.log(resArr)
