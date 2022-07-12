let arr = ['Up', 'Down', 'Down', 'Up', 'Up', 'Down', 'Down', 'Up', 'Up', 'Up', 'Up', 'Up', 'Down', 'Down', 'Down', 'Down', 'Up', 'Up', 'Down', 'Down', 'Down', 'Up', 'Down', 'Down', 'Down', 'Up', 'Up', 'Up', 'Down', 'Down', 'Up', 'Up', 'Up', 'Down', 'Up', 'Down', 'Down', 'Down', 'Up', 'Down', 'Down', 'Up', 'Down', 'Down', 'Up', 'Down', 'Up', 'Up', 'Up', 'Down', 'Up', 'Up', 'Down', 'Up', 'Down', 'Down', 'Up', 'Down', 'Down', 'Up', 'Up']

let uCount = 0
let dCount = 0

for(let i = 0; i < arr.length; i++){
    if(arr[i] === 'Up'){
        uCount++
    }else if(arr[i] == 'Down'){
        dCount++
    }
}

console.log(uCount, dCount)