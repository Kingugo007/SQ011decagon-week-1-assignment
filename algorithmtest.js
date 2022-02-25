//challange 1
function noOfElements(x, y, z) {
    let countNumber = 0;
    for (const number of x) {
      if (number >= y && number <= z) {
        countNumber++;
      }
    }
    return countNumber;
  }

//challange 2
function divisible(a) {
    let countNumber = 0;
    for (const number of a) {
      if (number % 2 === 0 && number > 15) {
        countNumber++;
      }
    }
    return countNumber;
  }

  //challange 3
  function isDivisbleByN(arr, n) {
    let newArray = [];
    for (const number of arr) {
      if (number % n === 0) {
        newArray.push(number);
      }
    }
  
    return newArray;
  }
  //challange 4
  function highestSum(x, y) {
    let sumX = x.reduce((a, b) => a + b);
    let sumY = y.reduce((a, b) => a + b);
  
    if (sumX > sumY) {
      return sumX;
    } else {
      return sumY;
    }
  }

  //challange 5
  function replaceDivisible(x, y) {
    let newArray = [];
    for (const number of x) {
      if (number % y === 0) {
        newArray.push("isDivisible");
      } else {
        newArray.push(number);
      }
    }
  
    return newArray;
  }