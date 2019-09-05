console.log("first run");
// Bubble sort
/**
 * loop through all elements of the unsorted array
 * compare with adjacent elements
 * swap if elements are incorrectly placed
 * 
 */
let swap;
function sort(){
    debugger;
    function bubbleSort(unsortedArr){
        // create the end or counter for the loop 
        var length=unsortedArr.length-1;
        // initialize swap with false to avoid infinite loop
        swap = false;
        // iterate over the unsorted array
        for(let i=0;i<length;i++){
            //check if left if greater than right
            if(unsortedArr[i]>unsortedArr[i+1]){
                // START SWAP
                // change the value of swap to true for next iteration
                swap = true;
                // assign the left value to a temporary variable
                let temp=unsortedArr[i];
                // assign adjacent right value to the lefts
                unsortedArr[i]=unsortedArr[i+1];
                // assign left value (stored in temp) to adjacent right
                unsortedArr[i+1]=temp;
                // re-assign temp to null
                temp=null;
                //END SWAP
            }
        }
        // decrement the length by 1 to make sure the loop does not iterate till last element which is in the right position
        length--;
    }
    do{
        // recursion call to bubbleSort function until the array is not sorted
        bubbleSort(arr);
    }
    while(swap);
    let sortedArr=arr;
    return sortedArr;
}

let arr=[23,14,56,43,76,15,51,98,76];
// displaying unsorted array
document.getElementById('unsorted').textContent=arr.toString();
//let sorted=sort(arr);
// displaying sorted array
document.querySelector("#sorted").textContent=sort().toString();