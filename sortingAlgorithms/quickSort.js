var quickSort = {

    start: function () {
        quickSortRecursive(elementsToBeSorted, 0, elementsToBeSorted.length - 1);
        return this;
    },

    createBigONotationDisplayObject: function () {
        return {
            complexity: {
                time: {
                    average: "Nlog(N)",
                    worst: "N"
                },
                space: {
                    worst: "log(N)"
                }
            },
            values: {
                expected: {
                    time: elementsToBeSorted.length * Math.log10(elementsToBeSorted.length),
                    space: Math.log10(elementsToBeSorted.length)
                },
                obtained: {
                    time: arrayOfArrays.length,
                    space: Math.log10(spaceTaken)
                }
            }
        };
    }
}

function partition(elementsToBeSorted, leftIndex, rightIndex) {
    var pivot = elementsToBeSorted[Math.floor((rightIndex + leftIndex) / 2)],
        i = leftIndex,
        j = rightIndex;
    /* Quick sort's additional space is the space taken by the pivot element */
    spaceTaken++;
    while (i <= j) {
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

function quickSortRecursive(elementsToBeSorted, leftIndex, rightIndex) {
    var index;
    if (elementsToBeSorted.length > 1) {
        index = partition(elementsToBeSorted, leftIndex, rightIndex);
        if (leftIndex < index - 1) {
            quickSortRecursive(elementsToBeSorted, leftIndex, index - 1);
        }
        if (index < rightIndex) {
            quickSortRecursive(elementsToBeSorted, index, rightIndex);
        }
    }
}
