// Задание 1
function getArrayParams(arr) {
  let min,max,sum,avg;
  min = 100;
  max = -100;
  sum = 0;
  
  for (j=0; j<arr.length; j++){
	  if (arr[j]<min) {
		  min=arr[j];
	  }
	  if (arr[j]>max){
		  max=arr[j];
	  }
  }

    for (j=0; j<arr.length; j++) {
		sum += arr[j];
	}
	avg = (sum/arr.length).toFixed(2);

  return { min:min, max:max, avg:avg };
}

// Задание 2
function worker(arr) {
  let sum;

  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max

  // Ваш кода
  // for ...
  
  return max
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
