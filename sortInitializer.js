function doSort() {
    cleanUpBeforeRunningSort();
    resetGlobalVariables();
    swapHighlighter.initializeSwap();
    let sortAlgorithm = initializeSort(document.getElementById('sortAlgorithmDropDown').value);
    displaySortResults(sortAlgorithm);
}

function cleanUpScreen() {
    cleanUpBeforeRunningSort();
    hideDoSortButton();
    hideSortAlgorithmDropDown();
    hideDisplayedNumbers();
    hideDisplayedChart();
}

function cleanUpBeforeRunningSort() {
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