function fibArray(iter) {
    // console.log("This was printed recursively");
    if(iter === 1) {
        return [0];
    }
    if(iter === 2) {
        return [0, 1];
    }
    let arr = fibArray(iter-1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
}

// console.log(fibArray(8))



function mergeSort(arr) {
    if(arr.length == 1) {
        return arr;
    }
    let firstSorted = mergeSort(arr.slice(0, arr.length / 2));
    let secondSorted = mergeSort(arr.slice(arr.length / 2, arr.length));
    let temp = [];
    let maxLength = firstSorted.length + secondSorted.length;
    for(let i = 1; i <= maxLength; i++){
        if(firstSorted.length == 0) {
            temp.push(secondSorted.shift());
        } else if(secondSorted.length == 0) {
            temp.push(firstSorted.shift());
        }
        if(firstSorted[0] >= secondSorted[0]) {
            temp.push(secondSorted.shift());
        } else if(secondSorted[0] >= firstSorted[0]){
            temp.push(firstSorted.shift())
        }
    }
    return temp;
}
let myArray = [105, 79, 5, 100, 110, 108, 372, 55, 122];

console.log(mergeSort(myArray))
