let population = [32.3, 34.2, 34.4, 35.3, 35.9, 36.2, 37.4, 37.6, 37.7, 37.9, 38.1, 38.3, 38.7, 39.0, 39.5, 39.7, 40.2, 40.6, 41.4, 41.6, 42.4, 42.8, 43.2, 49.2]

function popMean(arr){
    let sum = arr.reduce((a, b) => a + b, 0)
    
    return sum/arr.length;
}
console.log('Population length: ' + population.length)
console.log('Sum of data set: ' + population.reduce((a, b) => a + b, 0))
console.log('Population Mean:  μ = ' + popMean(population))
console.log('Sample Mean:  X̄ = ' + popMean(population).toFixed(1))

function findMissingItem(arr, numberOfItems, median){
    let sum = arr.reduce((a, b) => a + b, 0)
    console.log(sum, 29.5*6)
    return (median * numberOfItems) - sum
}

let missingItemArray = [7, 12, 27, 41, 49]
console.log(findMissingItem(missingItemArray, 6, 29.5))

let bottled = [5.15, 5.09, 5.37, 5.20, 4.90, 5.23, 5.52, 5.37, 5.13, 5.37, 5.21, 5.24]
let tap = [7.64, 7.45, 7.46, 7.50, 7.68, 7.69, 7.45, 2.72, 7.56, 7.46, 7.52, 7.46]


