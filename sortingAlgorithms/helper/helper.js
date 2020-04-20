/* To to make this function pure & avoid output arguments */
function swapElements(elementsToBeSorted, leftIndex, rightIndex) {
    var temp = elementsToBeSorted[leftIndex];
    elementsToBeSorted[leftIndex] = elementsToBeSorted[rightIndex];
    elementsToBeSorted[rightIndex] = temp;
    return elementsToBeSorted;
}