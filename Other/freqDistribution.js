//this array contains all the data from set
let arr = [30182, 30538, 30811, 32185, 32965, 33779, 34033, 34299, 34622, 34822, 35210, 35534, 35810, 36071, 36925, 37227, 37850, 38333, 38735, 38973, 39711, 40216, 41074, 41351, 52432]

//Console log highest and lowest value in arr
console.log('Highest Value in arr:  ' + Math.max(...arr))
console.log('Lowest Value in arr:  ' + Math.min(...arr))

//we count the occurence of each of the values (0, 1, 2, 3, 4, 5)
let zero = 0;
let one = 0;
let two = 0;
let three = 0;
let four = 0;
let five = 0;
let six = 0;
let seven = 0;

//This loop checks frequencies of smaller observation values when data set is appropriate
for(let i = 0; i < arr.length; i++){
    if(arr[i] === 0){
        zero++
    }
    if(arr[i] === 1){
        one++
    }
    if(arr[i] === 2){
        two++
    }
    if(arr[i] === 3){
        three++
    }
    if(arr[i] === 4){
        four++
    }
    if(arr[i] === 5){
        five++
    }
    if(arr[i] === 6){
        six++
    }
    if(arr[i] === 7){
        seven++
    }
}

console.log('Freqs: ' + zero + ',' + one + ','+ two + ','+ three + ','+ four + ','+ five + ','+ six + ','+ seven)

//​(a) Construct a frequency distribution. Use a first class having a lower class limit of 35k and a class width of 5k
let classA = 0

let lowerClassLimit = 50000;
let upperClassLimit = 54999;

//let lowestClassLimit = 0
// let highestClassLimit = 3.99
// let classWidth = 0.49

for(let i = 0; i < arr.length; i++){
    if(arr[i] >= lowerClassLimit  && arr[i] <= upperClassLimit){
        classA++
    }
}


console.log(classA)


function populateClassArr(n, arrName){
    for(let i = 0; i < n; i++){
        arrName.push('Class'+String(i+1))
    }
}

let classArr = []
populateClassArr(8, classArr)
console.log(classArr)

let frequencyDistributionAllClasses = new Object();
for(let i = 0; i < classArr.length; i++){
    let classStr = classArr
    frequencyDistributionAllClasses.classStr = 0
}

console.log(frequencyDistributionAllClasses)

30182, 30538, 30811, 32185, 32965, 33779, 34033, 34299, 34622, 34822, 35210, 35534, 35810, 36071, 36925, 37227, 37850, 38333, 38735, 38973, 39711, 40216, 41074, 41351, 52432