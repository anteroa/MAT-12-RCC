//Population array:
let population = [76 ,61 ,60 ,80 ,73 ,80 ,80 ,68 ,73]
console.log('Population array: ', population)

//Function to calculate the mean of an array:
function mean(arr){
    let sum = arr.reduce((a, b) => a + b, 0)
    return sum/arr.length;
}

//Population mean:
let popMean = mean(population)
console.log('Population Mean:  ', popMean)

//Next we calculate the population standard deviation
//2.Calculate deviations
function setDeviations(arr, mean){
    let deviationsArray = []
    for(let i = 0; i < arr.length; i++){
        deviationsArray.push(arr[i] - mean)
    }
    return deviationsArray
}

let devArr =  setDeviations(population, popMean)

console.log('Deviations Array prior to square: ' ,  devArr)
//3.Square each deviation to make it positive
let squaredDevs = [] 
devArr.forEach(el => {
    squaredDevs.push(el*el)    
})

console.log('Deviations Array after square: ' ,  squaredDevs)

//4. Add the squared deviations together
let sum = squaredDevs.reduce((a, b) => a + b, 0)
console.log('Sum = ' + sum)

//5. Divide the sum by one less than than the number of data points
//  This is the variance
function getVariance(s, n){
    return s / (n)
}
let variance = getVariance(sum, population.length)
console.log('Variance σ2: ' , variance.toFixed(1))

//Take the square root of the variance to get the standard deviation
let standardDeviation = Math.sqrt(variance)
console.log('Pop Standard Deviation: ' , standardDeviation.toFixed(1))


//Population z-score:
let popZScores = []

//Function to calculate the zscore of an entire array, in this case the entire population
function getZs(popArr, zscoreArr, mean, stDev){
    for(let i = 0; i < popArr.length; i++){
        zscoreArr.push(((popArr[i]-mean)/stDev))
        //zscoreArr.push(((popArr[i]-mean)/stDev).toFixed(2))
    }
}

getZs(population, popZScores, popMean, standardDeviation)

console.log('Resulting Population z-scores: ', popZScores)

let zscoreMeans = mean(popZScores).toFixed(1)
console.log('zScore Means:', zscoreMeans)

let zscoreDeviations = setDeviations(popZScores, zscoreMeans)
console.log('zscore Deviations Array prior to square: ' ,  zscoreDeviations)

let squaredzDevs = []
zscoreDeviations.forEach(el => {
    squaredzDevs.push(el*el)    
})

let zsum = squaredzDevs.reduce((a, b) => a + b, 0)
console.log('Deviations Array after square: ' ,  squaredzDevs)

let zvariance = getVariance(zsum, popZScores.length)
console.log('Variance σ2 of zScores: ' , zvariance.toFixed(1))

//Take the square root of the variance to get the standard deviation
let standardzDeviation = Math.sqrt(zvariance)
console.log('zScores Standard Deviation: ' , standardzDeviation.toFixed(1))