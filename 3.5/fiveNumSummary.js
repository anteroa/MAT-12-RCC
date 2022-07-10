//The following code can obtain all the info necessary for the Five-Number summary
//Also used to create and interpret boxplots (you need to know the boxplots tho...)
//The min and max values of the data set can be obtained via sorting
let dataSet = [0.32, 0.18, 0.91, 1.53, 0.19, 2.54, 1.82, 2.99, 0.12, 0.49, 0, 1.01, 3.04, 0.12, 0.66, 3.55, 1.98, 0.01, 2.76, 2.94, 0, 0.18, 0, 0.3, 2.91, 0.23, 0.86, 2.53]
let sortedSet = dataSet.sort((a, b) => a- b, 0)
console.log(sortedSet)

//Min and max 
let minimum = sortedSet[0]
let maximum = sortedSet[sortedSet.length-1]
console.log('Minimum: ', minimum)
console.log('Maximum: ', maximum)

//From the sorted data set we obtain the median
function median(values){
    if(values.length === 0) throw new Error("No inputs");
  
    values.sort((a, b) => a- b, 0)

    var half = Math.floor(values.length / 2);
    
    if (values.length % 2)
      return values[half];
    
    return (values[half - 1] + values[half]) / 2.0;
}
let m = median(dataSet)
console.log('Median: ', m)


//Calculate 1st and 3rd quartiles using median(the median is the second quartile Q2)
let bottomH = []
for(let i = 0; i < dataSet.length; i++){
  if(i < Math.min(dataSet.length/2)){
    bottomH.push(sortedSet[i])
  }
}
console.log('\nBottom half Q1 = ' , median(bottomH).toFixed(3))
console.log(bottomH)

console.log('Median Q2 = ', m.toFixed(3))

let topH = []
for(let i = 0; i < dataSet.length; i++){
  if(i >= Math.max(dataSet.length/2)){
    topH.push(sortedSet[i])
  }
}
console.log('Top half Q3 = ' , median(topH).toFixed(3))
console.log(topH)

let IQR = median(topH) - median(bottomH)
console.log('\nIQR = ', IQR)

let lowerFence = median(bottomH) - (IQR * 1.5)
console.log('\nLower Fence : ' , lowerFence)

let upperFence = median(topH) + (IQR * 1.5)
console.log('Upper Fence : ' , upperFence)

