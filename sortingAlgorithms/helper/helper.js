var arrayOfArrays, ai, globalCounter, initialArray, spaceTaken;

/* To to make this function pure & avoid output arguments */
function swapElements(elementsToBeSorted, leftIndex, rightIndex) {
    var temp = elementsToBeSorted[leftIndex];
    elementsToBeSorted[leftIndex] = elementsToBeSorted[rightIndex];
    elementsToBeSorted[rightIndex] = temp;
    return elementsToBeSorted;
}

function resetGlobalVariables() {
    arrayOfArrays = [];
    ai = 0;
    globalCounter = 0;
    initialArray = JSON.parse(JSON.stringify(elementsToBeSorted));
    spaceTaken = 0;
}