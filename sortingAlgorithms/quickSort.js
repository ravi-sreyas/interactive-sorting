var arrayOfArrays = [];
var ai = 0;

function partition(elementsToBeSorted, leftIndex, rightIndex) {
    var pivot   = elementsToBeSorted[Math.floor((rightIndex + leftIndex) / 2)],
        i = leftIndex,
        j = rightIndex;
        while(i <= j) {
            while (elementsToBeSorted[i] < pivot) {
                i++;
            }
            console.log("i : " + i + " " + elementsToBeSorted[i]);
            while (elementsToBeSorted[j] > pivot) {
                j--;
            }
            console.log("j : " + j + " " + elementsToBeSorted[j]);
            if (i <= j) {
                swapElements(elementsToBeSorted, i, j);
                arrayOfArrays[ai++] = JSON.parse(JSON.stringify(elementsToBeSorted));
                i++;
                j--;
            }
        }
        return i;
}

function quickSort(elementsToBeSorted, leftIndex, rightIndex) {
    var index;
    if (elementsToBeSorted.length > 1) {
        index = partition(elementsToBeSorted, leftIndex, rightIndex);
        if (leftIndex < index - 1) {
            quickSort(elementsToBeSorted, leftIndex, index - 1);
        }
        if (index < rightIndex) {
            quickSort(elementsToBeSorted, index, rightIndex);
        }
    }
}

function quickSortInitiate(elementsToBeSorted, leftIndex, rightIndex) {
    arrayOfArrays = [];
    ai = 0;
    quickSort(elementsToBeSorted, leftIndex, rightIndex);
    return arrayOfArrays;
}