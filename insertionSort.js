/* Insertion Sort */

function insertionSort(arr) {

    for (var i = 1; i < arr.length; i++) {
        var el = arr[i];
        for (var j = i - 1; j >= 0; j--) {
            if (arr[j] > el) {
                arr[j + 1] = arr[j];
            } else {
                break;
            }
        }
        arr[j + 1] = el;
    }

    return arr;

}


/* Testing the function */

/* Test arrays. We use copies because the functions sort in place and
   we don't want the second function to work with the result of the first one
*/
var arr1 = [2, 3, 6, 7, 1, 4, 8, 3, 9, 0, 3, 4, 61, 72, 75, 3, 2, 34, 100, 40, 25, 10, 5, 1];
var arr2 = [2, 3, 6, 7, 1, 4, 8, 3, 9, 0, 3, 4, 61, 72, 75, 3, 2, 34, 100, 40, 25, 10, 5, 1];

/* Array comparison function */
Array.prototype.compare = function(testArr) {
    if (this.length != testArr.length) return false;
    for (var i = 0; i < testArr.length; i++) {
        if (this[i].compare) {
            if (!this[i].compare(testArr[i])) return false;
        }
        if (this[i] !== testArr[i]) return false;
    }
    return true;
}

/* Test whether our function is correct by
   comparing results with the native sort method */

insertionSort(arr1).compare(arr2.sort(function(a, b) {
    return a - b;
}));