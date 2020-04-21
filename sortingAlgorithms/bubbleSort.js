function startBubbleSort() {
    if(bubbleSortSingleIteration(elementsToBeSorted)) {
        setTimeout(() => doSort(), 200);
    }
}

function bubbleSortSingleIteration(elementsToBeSorted) {
    var elementsArraySize = elementsToBeSorted.length-1;
    for (var i = 0; i < elementsArraySize; i++) {
        if (elementsToBeSorted[i] < elementsToBeSorted[i+1]) {
            elementsToBeSorted = swapElements(elementsToBeSorted, i, i+1);
            updateHTMLElements(elementsToBeSorted);
            return true;
        }
    }
    return false;
}