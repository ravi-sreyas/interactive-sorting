var swapHighlighter = {
    index: [],
    array: [],
    nonSwappingIndex: [-1, -1],
    arrayStyles: {
        pivot: "background-color: green; color: yellow; border-radius: 40%;",
        salmon: "background-color: salmon; color: black; border-radius: 40%;",
        goldenrod: "background-color: goldenrod; color: black; border-radius: 40%;",
        none: ""
    },
    chartStyles: {
        pivot: "background-color: green; color: yellow;",
        salmon: "background-color: salmon;",
        goldenrod: "background-color: goldenrod;",
        none: ""
    },

    initializeSwap: function () {
        this.index = []
        this.array = []
    },

    saveSwapState: function (indexElements, arrayElements) {
        this.index.push(indexElements);
        this.array.push(arrayElements);
    },

    showSwapping: function (elementsToDisplay, i, total, j) {
        setTimeout(() => {
            swapHighlighter.addHTMLElementsForDisplayingNumbers(swapHighlighter.array[j], swapHighlighter.index[j]);
            swapHighlighter.addHTMLElementsForDisplayingChart(swapHighlighter.array[j], swapHighlighter.index[j]);
            j++;
        }, 1000);
        setTimeout(() => {
            swapHighlighter.addHTMLElementsForDisplayingNumbers(swapHighlighter.array[j], swapHighlighter.index[j]);
            swapHighlighter.addHTMLElementsForDisplayingChart(swapHighlighter.array[j], swapHighlighter.index[j]);
            j++;
        }, 2000);
        setTimeout(() => {
            swapHighlighter.addHTMLElementsForDisplayingNumbers(elementsToDisplay[i], this.nonSwappingIndex);
            swapHighlighter.addHTMLElementsForDisplayingChart(elementsToDisplay[i], this.nonSwappingIndex);
            i++;
            if (i < total) {
                swapHighlighter.showSwapping(elementsToDisplay, i, total, j);
            }
        }, 3000);
    },

    addHTMLElementsForDisplayingNumbers: function (elements, index) {
        const randomArrayElements = document.getElementById('random-array-elements');
        randomArrayElements.innerHTML = "[";
        for (let i = 0; i < elements.length; i++) {
            /* Since pivotElement is sent as index[2], first priority is to display it (whenever available) */
            if (i == index[2]) {
                swapHighlighter.applyStyle.forArray(randomArrayElements, elements[i], this.arrayStyles.pivot);
            } else if (i == index[1]) {
                swapHighlighter.applyStyle.forArray(randomArrayElements, elements[i], this.arrayStyles.goldenrod);
            } else if (i == index[0]) {
                swapHighlighter.applyStyle.forArray(randomArrayElements, elements[i], this.arrayStyles.salmon);
            } else {
                swapHighlighter.applyStyle.forArray(randomArrayElements, elements[i], this.arrayStyles.none);
            }
        }
        randomArrayElements.innerHTML = randomArrayElements.innerHTML + "]";
    },

    addHTMLElementsForDisplayingChart: function (elements, index) {
        const chartElement = document.getElementById('chart');
        chartElement.innerHTML = "";
        for (let i = 0; i < elements.length; i++) {
            if (i == index[2]) {
                swapHighlighter.applyStyle.forChart(chartElement, elements[i], this.chartStyles.pivot);
            } else if (i == index[1]) {
                swapHighlighter.applyStyle.forChart(chartElement, elements[i], this.chartStyles.goldenrod);
            } else if (i == index[0]) {
                swapHighlighter.applyStyle.forChart(chartElement, elements[i], this.chartStyles.salmon);
            } else {
                swapHighlighter.applyStyle.forChart(chartElement, elements[i], this.chartStyles.none);
            }
        }
    },

    applyStyle: {
        forArray: function (randomArrayElements, element, styles) {
            randomArrayElements.innerHTML = randomArrayElements.innerHTML +
                "<div class='random-array-element' style='" + styles + "'>&nbsp&nbsp" + element + "&nbsp&nbsp</div>"
        },

        forChart: function (chartElement, element, styles) {
            chartElement.innerHTML = chartElement.innerHTML +
                "<div class='bar" + element + "' " +
                "style='grid-row-start: " + calculateChartValue(element * barHeightMultiplier) + "; " + styles + "'>" +
                "<div class='element-on-chart'>" + element + "</div>" + "</div>";

        }
    }
}