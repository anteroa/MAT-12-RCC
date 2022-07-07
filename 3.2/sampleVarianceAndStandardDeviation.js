/*The sample standard deviation, s, of a variable is the square root of the 
the sum of squared deviations about the sample mean divided by n - 1, where n
is the sample size */

/**Here's how to calculate sample standard deviation:

Step 1: Calculate the mean of the data—this is x̄ in the formula.

Step 2: Subtract the mean from each data point. These differences 
are called deviations. Data points below the mean will have negative
deviations, and data points above the mean will have positive deviations.

Step 3: Square each deviation to make it positive.

Step 4: Add the squared deviations together.

Step 5: Divide the sum by one less than the number of data points in the 
sample. The result is called the variance.

Step 6: Take the square root of the variance to get the standard deviation. */

let sample1 = [85,69,67]
let sample2 = [89,64,69]
let sample = [73,69,62]

console.log('SAMPLE')

//1.Calculate the mean of the data
function mean(arr){
    let sum = arr.reduce((a, b) => a + b, 0)
    return sum/arr.length;
}

let m = mean(sample)

//2.Calculate deviations
function setDeviations(arr, mean){
    let deviationsArray = []
    for(let i = 0; i < arr.length; i++){
        deviationsArray.push(arr[i] - mean)
    }
    return deviationsArray
}

let devArr =  setDeviations(sample, m)

console.log('Deviations Array prior to square: ' +  devArr)
//3.Square each deviation to make it positive
let squaredDevs = [] 
devArr.forEach(el => {
    squaredDevs.push(el*el)    
})

console.log('Deviations Array after square: ' +  squaredDevs)

//4. Add the squared deviations together
let sum = squaredDevs.reduce((a, b) => a + b, 0)
console.log('Sum = ' + sum)

//5. Divide the sum by one less than than the number of data points
//  This is the variance
function getVariance(s, n){
    return sum / (n-1)
}
let variance = getVariance(sum, sample.length)
console.log('Variance : ' + variance.toFixed(1))

//Take the square root of the variance to get the standard deviation
let standardDeviation = Math.sqrt(variance)
console.log('Standard Deviation: ' + standardDeviation.toFixed(1))

