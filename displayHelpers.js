const totalRows = 101;
let barHeightMultiplier = 1;

function updateHTMLElements(elementsToBeSorted) {
    addHTMLElementsForDisplayingNumbers(elementsToBeSorted);
    addHTMLElementsForDisplayingChart(elementsToBeSorted);
}

function updateHTMLElementsWithArray(elementsToDisplay, i, total) {
    setTimeout(() => {
        addHTMLElementsForDisplayingNumbers(elementsToDisplay[i]);
        addHTMLElementsForDisplayingChart(elementsToDisplay[i]);
        i++;
        if(i < total) {
            updateHTMLElementsWithArray(elementsToDisplay, i, total);
        }
    }, 1000);
}

function addHTMLElementsForDisplayingNumbers(elements) {
    const randomArrayElements = document.getElementById('random-array-elements');
    randomArrayElements.innerHTML = "[";
    elements.forEach(element => randomArrayElements.innerHTML = randomArrayElements.innerHTML +
    "<div class='random-array-element'>&nbsp&nbsp" + element + "&nbsp&nbsp</div>");
    randomArrayElements.innerHTML = randomArrayElements.innerHTML + "]";
}

function addHTMLElementsForDisplayingChart(elements) {
    const chartElement = document.getElementById('chart');
    chartElement.innerHTML = "";
    elements.forEach(element => chartElement.innerHTML = chartElement.innerHTML +
    "<div class='bar" + element + "' " +
    "style='grid-row-start: " + calculateChartValue(element*barHeightMultiplier) + ";'>" +
    "<div class='element-on-chart'>" + element + "</div>" + "</div>");
}

function displaySortingRelatedElements() {
    displayDoSortButton();
    displaySortAlgorithmDropDown();
}

function displayDoSortButton() {
    document.getElementById('doSortButton').setAttribute("style", "display: flex");
}

function displaySortAlgorithmDropDown() {
    document.getElementById('sortAlgorithmText').setAttribute("style", "display: flex");
    document.getElementById('sortAlgorithmDropDown').setAttribute("style", "display: flex");
}

function addCustomColumnsForGridTemplate(numberOfElements) {
    document.getElementById('chart').setAttribute("style", "grid-template-columns:repeat(" + numberOfElements + ", 1fr)");
}

function doConsoleLog(...elements) {
    elements.forEach(element => console.log("  " + element + "  "));
}

function updatePivotElementValue(value) {
    document.getElementById('pivot-element-wrapper').innerHTML = value;
}

function printBigONotation(bigO, stepsTaken, expectedValue) {
    displayBigOWrapper();
    displayBigOComplexity(bigO);
    displayExpectedBigOValue(expectedValue);
    displayStepsTaken(stepsTaken);
}

function displayBigOWrapper() {
    document.getElementById('big-o-text-wrapper').setAttribute("style", "display: block");
}

function displayBigOComplexity(bigOCompexity) {
    document.getElementById('big-o-complexity-text').innerHTML = "Time Complexity (Best) : " + bigOCompexity +
    "<br><i>(N is the input array size)</i></br>";
}

function displayExpectedBigOValue(expectedValue) {
    document.getElementById('big-o-expected-value-text').innerHTML = "Expected value <i>(Average Time complexity)</i> : " + expectedValue;
}

function displayStepsTaken(stepsTaken) {
    document.getElementById('steps-taken-text').innerHTML = "Obtained value <i>(Steps Taken)</i> : " + stepsTaken;
}

function hideBigONotation() {
    hideBigOWrapper();
}

function hideBigOWrapper() {
    document.getElementById('big-o-text-wrapper').setAttribute("style", "display: none");
}