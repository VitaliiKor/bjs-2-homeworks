  //Закомментированный код - то же самое, только чуть длиннее.
function compareArrays(arr1, arr2) {
  // let result;
  // result = arr1.every((n, i) => n === arr2[i]) && (arr1.length === arr2.length);
  // return result; // boolean
  return arr1.every((n, i) => n === arr2[i]) && (arr1.length === arr2.length);
}

function advancedFilter(arr) {
  // let resultArr;
  // resultArr = arr.filter((number) => number % 3 === 0).filter((number) => number > 0).map((number) => number * 10);
  // return resultArr; // array
	return arr.filter((number) => number % 3 === 0).filter((number) => number > 0).map((number) => number * 10);
}

