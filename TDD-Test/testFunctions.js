function capitalize(string) {
  return string[0].toUpperCase() + string.substring(1);
}

function reverseString(string) {
  const sentenceArray = string.split(" ");
  let newArray = [];
  for (let i = sentenceArray.length - 1; i >= 0; i--) {
    newArray.push(sentenceArray[i]);
  }
  return newArray.join(" ");
}

function calculator(mathFunction, num1, num2) {
  if (mathFunction === "addition") {
    return num1 + num2;
  } else if (mathFunction === "subtraction") {
    return num1 - num2;
  } else if (mathFunction === "multiply") {
    return num1 * num2;
  } else {
    return num1 / num2;
  }
}

function average(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += i;
  }
  return Math.round(sum / array.length + 1);
}
function minNumber(array) {
  let minNumber = null;
  for (let i = 0; i < array.length; i++) {
    if (minNumber > array[i] || minNumber === null) {
      minNumber = array[i];
    }
  }
  return minNumber;
}

function maxNumber(array) {
  let maxNumber = null;
  for (let i = 0; i < array.length; i++) {
    if (maxNumber < array[i] || maxNumber === null) {
      maxNumber = array[i];
    }
  }
  return maxNumber;
}
function analyzeArray(array) {
  const object = {};
  object.average = average(array);
  object.min = minNumber(array);
  object.max = maxNumber(array);
  object.length = array.length;
  return object;
}
export { capitalize, reverseString, calculator, analyzeArray };
