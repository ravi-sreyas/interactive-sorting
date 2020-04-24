function doSort() {
    cleanUpScreen();
    resetGlobalVariables();
    let sortAlgorithm = initializeSort(document.getElementById('sortAlgorithmDropDown').value);
    displaySortResults(sortAlgorithm);
}

function cleanUpScreen() {
    hideUndoSortButton();
    hideBigONotation();
}

function initializeSort(algorithmName) {
    switch (algorithmName) {
        case 'bubbleSort': return bubbleSort.start();
        case 'quickSort': return quickSort.start();
        case 'mergeSort': return mergeSort.start();
    }
}

function displaySortResults(sortAlgorithm) {
    updateHTMLElementsWithArray(arrayOfArrays, 0, arrayOfArrays.length);
    displayUndoSortButton();
    printBigONotation(sortAlgorithm.createBigONotationDisplayObject());
}