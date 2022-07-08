function median(values){
    if(values.length ===0) throw new Error("No inputs");
  
    values.sort(function(a,b){
      return a-b;
    });

    var half = Math.floor(values.length / 2);
    
    if (values.length % 2)
      return values[half];
    
    return (values[half - 1] + values[half]) / 2.0;
  }

//Data set that we wish to determine the quartiles for:
let values = [0.35, 0.66, 0.94, 1.32, 1.62, 1.89, 2.04, 2.47, 2.86, 3.15, 3.57, 3.83, 4.31, 4.71, 4.91, 5.26, 5.68, 5.98, 6.31, 6.53]

function sortArr(dataSet){
  return dataSet.sort((a,b) =>{
    a-b,0;
  });
}

let sortedDataSet = sortArr(values)
console.log('Sorted Data Set')
console.log(sortedDataSet)


console.log('Median or Q2: ')
console.log(median(values).toFixed(3))

//let bHalf = [32.3, 34.2, 34.4, 35.3, 35.9, 36.2, 37.4, 37.6, 37.7, 37.9, 38.1, 38.3]
let bottomH = []
for(let i = 0; i < values.length; i++){
  if(i < values.length/2){
    bottomH.push(sortedDataSet[i])
  }
}
console.log('Bottom half Q1 = ' , median(bottomH))
console.log(bottomH)

//let tHalf = [38.7, 39.0, 39.5, 39.7, 40.2, 40.6, 41.4, 41.6, 42.4, 42.8, 43.2, 49.2]
let topH = []
for(let i = 0; i < values.length; i++){
  if(i >= values.length/2){
    topH.push(sortedDataSet[i])
  }
}
console.log('Top half Q3 = ' , median(topH).toFixed(3))
console.log(topH)

let IQR = median(topH) - median(bottomH)
console.log('IQR = ', IQR)

let lowerFence = median(bottomH) - (IQR * 1.5)
console.log('Lower Fence :   ' , lowerFence)

let upperFence = median(topH) + (IQR * 1.5)
console.log('Upper Fence :   ' , upperFence)
