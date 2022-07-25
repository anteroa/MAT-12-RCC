//Calculation of a relative frequency 

//First the sum of all frequencies needs to be obtantained
//In this case it is passed as an array to a function that returns the sum
function sumFrequencies(arr){
    return arr.reduce((a, b) => a + b, 0)
}

let observations = [379, 378, 983, 322, 84]


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



9,24
10.9,10
18.7,104
17.1,16
14.7,8.5
12.2,21
11.1,-6.6
9.9,27
9,134
11.1,-10
14.1,31
13.8,25