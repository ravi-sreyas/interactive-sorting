function startBubbleSort() {
    bubbleSort(elementsToBeSorted);
    updateHTMLElementsWithArray(arrayOfArrays, 0, arrayOfArrays.length);
    printBigONotation("N^2", globalCounter, elementsToBeSorted.length * elementsToBeSorted.length);
}

function bubbleSort(elementsToBeSorted) {
    var elementsArraySize = elementsToBeSorted.length-1;
    var swapp;
    do {
        swapp = false;
        for (var i = 0; i < elementsArraySize; i++) {
            globalCounter++;
            if (elementsToBeSorted[i] > elementsToBeSorted[i+1]) {
                elementsToBeSorted = swapElements(elementsToBeSorted, i, i+1);
                arrayOfArrays[ai++] = JSON.parse(JSON.stringify(elementsToBeSorted));
                swapp = true;
            }
        }
    } while(swapp);
}