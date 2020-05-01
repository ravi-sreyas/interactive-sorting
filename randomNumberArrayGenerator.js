let elementsToBeSorted;

var randomNumberArrayGenerator = {
    generatedArray: []
};

function generateRandomNumberArray() {
    const maxValue = generateMaxValue();
    const minValue = generateMinValue();
    const numberOfElements = document.getElementById('numberOfElements').value;
    barHeightMultiplier = 100/maxValue;
    doConsoleLog(maxValue, minValue, numberOfElements, barHeightMultiplier);
    addCustomColumnsForGridTemplate(numberOfElements);

    randomNumberArrayGenerator.generatedArray = createRandomNumberArray(numberOfElements-2, minValue, maxValue);
    elementsToBeSorted = JSON.parse(JSON.stringify(randomNumberArrayGenerator.generatedArray));
    displayOnScreen(elementsToBeSorted);
}

function undoSort() {
    elementsToBeSorted = JSON.parse(JSON.stringify(randomNumberArrayGenerator.generatedArray));
    displayOnScreen(randomNumberArrayGenerator.generatedArray);
}

function displayOnScreen(generatedArray) {
    doConsoleLog(generatedArray);
    cleanUpScreen();
    updateHTMLElements(generatedArray);
    displaySortingRelatedElements();
}

function generateMaxValue() {
    return getRandomNumberWithin(50, 99);
}

function generateMinValue() {
    return getRandomNumberWithin(1, 49);
}

function createRandomNumberArray(numberOfElements, minValue, maxValue) {
    let arr = [minValue, maxValue];
    for(it = 1; it <= numberOfElements; it++) {
        arr.push(getRandomNumberWithin(minValue, maxValue));
    }
    return arr;
}

function getRandomNumberWithin(minValue, maxValue) {
    return Math.floor(Math.random() * (maxValue - minValue) + minValue);
}

function calculateChartValue(value) {
    return totalRows - Math.floor(value);
}