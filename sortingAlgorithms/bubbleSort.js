var bubbleSort = {

    start: function () {
        var elementsArraySize = elementsToBeSorted.length - 1;
        var swapp;
        do {
            swapp = false;
            for (var i = 0; i < elementsArraySize; i++) {
                globalCounter++;
                if (elementsToBeSorted[i] > elementsToBeSorted[i + 1]) {
                    swapHighlighter.saveSwapState([i, i + 1], JSON.parse(JSON.stringify(elementsToBeSorted)));
                    elementsToBeSorted = swapElements(elementsToBeSorted, i, i + 1);
                    swapHighlighter.saveSwapState([i, i + 1], JSON.parse(JSON.stringify(elementsToBeSorted)));
                    arrayOfArrays[ai++] = JSON.parse(JSON.stringify(elementsToBeSorted));
                    swapp = true;
                }
            }
        } while (swapp);
        return this;
    },

    createBigONotationDisplayObject: function () {
        return {
            complexity: {
                time: {
                    average: "N^2",
                    worst: "N^2"
                },
                space: {
                    worst: "1"
                }
            },
            values: {
                expected: {
                    time: elementsToBeSorted.length * elementsToBeSorted.length,
                    space: 0
                },
                obtained: {
                    time: globalCounter,
                    space: "No additional space needed."
                }
            }
        };
    }
}