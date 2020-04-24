function doSort() {
    cleanUpScreen();
    resetGlobalVariables();
    switch(document.getElementById('sortAlgorithmDropDown').value) {
        case 'bubbleSort': startBubbleSort();
                            break;
        case 'quickSort': startQuickSort();
                            break;
        case 'mergeSort': startMergeSort();
                            break;
    }
}

function cleanUpScreen() {
    hideUndoSortButton();
    hideBigONotation();
}