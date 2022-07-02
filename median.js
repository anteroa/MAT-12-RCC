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

let values = [7.64, 7.45, 7.46, 7.50, 7.68, 7.69, 7.45, 2.72, 7.56, 7.46, 7.52, 7.46]

console.log('Median: ' + median(values).toFixed(2))