let data = [85, 62, 89, 67, 83, 73, 90, 64, 69]

let range = data.sort((a, b) => a - b)
console.log('Range :  ' + Math.abs(range[0] - range[range.length-1]))

