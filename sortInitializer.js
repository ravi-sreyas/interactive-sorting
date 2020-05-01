function doSort() {
    cleanUpScreen();
    resetGlobalVariables();
    swapHighlighter.initializeSwap();
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
    swapHighlighter.showSwapping(arrayOfArrays, 0, arrayOfArrays.length, 0);
    displayUndoSortButton();
    printBigONotation(sortAlgorithm.createBigONotationDisplayObject());
}