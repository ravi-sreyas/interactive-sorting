function startQuickSort() {
    quickSort(elementsToBeSorted, 0, elementsToBeSorted.length - 1);
    updateHTMLElementsWithArray(arrayOfArrays, 0, arrayOfArrays.length);
    printBigONotation("Nlog(N)", arrayOfArrays.length, elementsToBeSorted.length * Math.log10(elementsToBeSorted.length));
}

function partition(elementsToBeSorted, leftIndex, rightIndex) {
    var pivot   = elementsToBeSorted[Math.floor((rightIndex + leftIndex) / 2)],
        i = leftIndex,
        j = rightIndex;
        while(i <= j) {
            while (elementsToBeSorted[i] < pivot) {
                i++;
            }
            while (elementsToBeSorted[j] > pivot) {
                j--;
            }

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