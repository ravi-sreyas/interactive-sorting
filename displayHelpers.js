const errorMessage = "Invalid number. Please enter an integer from 3 to 30."
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

function displayUndoSortButton() {
    document.getElementById('undoSortButton').setAttribute("style", "display: flex");
}

function printBigONotation(bigO) {
    displayBigOWrapper();
    displayBigOComplexity(bigO.complexity);
    displayBigOValues(bigO.values);
}

function displayBigOWrapper() {
    document.getElementById('big-o-text-wrapper').setAttribute("style", "display: block");
}

function displayBigOComplexity(bigOCompexity) {
    document.getElementById('big-o-complexity-text').innerHTML += "<u>Time & Space Complexity</u> <i>(N is the input array size)</i> : <br/>";
    document.getElementById('big-o-complexity-text').innerHTML += "Time Complexity (Average) : " + bigOCompexity.time.average +
    "<br/>";
    document.getElementById('big-o-complexity-text').innerHTML += "Time Complexity (Worst) : " + bigOCompexity.time.worst +
    "<br/>";
    document.getElementById('big-o-complexity-text').innerHTML += "Space Complexity (Worst) : " + bigOCompexity.space.worst +
    "<br/><br/>";
}

function displayBigOValues(values) {
    displayExpectedBigOValue(values.expected);
    displayObtainedBigOValue(values.obtained);
}

function displayExpectedBigOValue(expectedValue) {
    document.getElementById('big-o-expected-value-text').innerHTML = "<u>Expected values</u> <i>(where c1 & c2 are constant)</i> : <br/>";
    document.getElementById('big-o-expected-value-text').innerHTML += "Average Time complexity : <i>c1*</i>" + expectedValue.time +
    "<br/>";
    document.getElementById('big-o-expected-value-text').innerHTML += "Worst Space complexity : <i>c2*</i>" + expectedValue.space +
    "<br/><br/>";
}

function displayObtainedBigOValue(obtainedValue) {
    document.getElementById('steps-taken-text').innerHTML = "<u>Obtained values</u> : <br/>";
    document.getElementById('steps-taken-text').innerHTML += "Steps taken : " + obtainedValue.time +
    "<br/>";
    document.getElementById('steps-taken-text').innerHTML += "Memory taken : " + obtainedValue.space +
    "<br/><br/>";
}

function hideUndoSortButton() {
    document.getElementById('undoSortButton').setAttribute("style", "display: none");
}

function hideBigONotation() {
    hideBigOWrapper();
}

function hideBigOWrapper() {
    document.getElementById('big-o-text-wrapper').setAttribute("style", "display: none");
}

function hideDoSortButton() {
    document.getElementById('doSortButton').setAttribute("style", "display: none");
}

function hideSortAlgorithmDropDown() {
    document.getElementById('sortAlgorithmText').setAttribute("style", "display: none");
    document.getElementById('sortAlgorithmDropDown').setAttribute("style", "display: none");
}

function hideDisplayedNumbers() {
    document.getElementById('random-array-elements').innerHTML = "";
}

function hideDisplayedChart() {
    document.getElementById('chart').innerHTML = "";
}

function showErrorMessageWrapper() {
    cleanUpScreen();
    document.getElementById('errorMessage').setAttribute("style", "display: block");
    document.getElementById('errorMessage').value = errorMessage;
}

function hideErrorMessageWrapper() {
    document.getElementById('errorMessage').setAttribute("style", "display: none");
}