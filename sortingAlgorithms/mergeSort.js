var mergeSort = {

  start: function () {
    arrayOfArrays = [JSON.parse(JSON.stringify(elementsToBeSorted))];
    ai = 0;
    mergeSortRecursive(elementsToBeSorted, 0, elementsToBeSorted.length);
    return this;
  },

  createBigONotationDisplayObject: function () {
    return {
      complexity: {
        time: {
          average: "Nlog(N)",
          worst: "Nlog(N)"
        },
        space: {
          worst: "N"
        }
      },
      values: {
        expected: {
          time: elementsToBeSorted.length * Math.log10(elementsToBeSorted.length),
          space: elementsToBeSorted.length
        },
        obtained: {
          time: arrayOfArrays.length,
          space: spaceTaken
        }
      }
    };
  }
}

function mergeSortRecursive(unsortedArray, leftI, rightI) {
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }

  const middle = Math.floor(unsortedArray.length / 2);
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  return merge(
    mergeSortRecursive(left, leftI, leftI + middle), mergeSortRecursive(right, leftI + middle, rightI), leftI, leftI + middle, leftI + middle, rightI
  );
}

function merge(left, right, leftIL, leftIR, rightIL, rightIR) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }
  createArraySnapshotAndPushToArrayOfArrays(resultArray, left, leftIndex, right, rightIndex, leftIL, leftIR, rightIL, rightIR);

  spaceTaken += resultArray.length;

  // #Note1:
  // We need to concat here because there will be one element remaining
  // from either left OR the right
  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

function createArraySnapshotAndPushToArrayOfArrays(resultArray, left, leftIndex, right, rightIndex, leftIL, leftIR, rightIL, rightIR) {
  var temp = JSON.parse(JSON.stringify(arrayOfArrays[ai]));
  let j = 0;
  var i = 0;
  for (i = leftIL; i < leftIR && j < resultArray.length; i++) {
    temp[i] = resultArray[j++];
  }
  for (i = rightIL; i < rightIR && j < resultArray.length; i++) {
    temp[i] = resultArray[j++];
  }

  // The following 2 while loops serve the same purpose as #Note1.
  while (leftIndex < left.length) {
    temp[i++] = left[leftIndex++];
  }

  while (rightIndex < right.length) {
    temp[i++] = right[rightIndex++];
  }

  arrayOfArrays[ai++] = JSON.parse(JSON.stringify(temp));
  arrayOfArrays[ai] = JSON.parse(JSON.stringify(temp));
}