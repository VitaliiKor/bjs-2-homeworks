// Задание 1
function getArrayParams(arr) {
<<<<<<< HEAD
  let min,max,sum,avg;
  min = arr[0];
  max = arr[0];
  sum = 0;
  
  for (j=0; j<arr.length; j++){
	  if (arr[j]<min) {
		  min=arr[j];
	  }
	  if (arr[j]>max){
		  max=arr[j];
	  }
	  sum += arr[j];
  }
  avg = (sum/arr.length).toFixed(2);
=======
  let min, max, sum, avg;

  // Ваш код
>>>>>>> 28ddd3309b8f284f7e1f48c1dc6a661a08dc5468

  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum = 0;
    for (k=0; k<arr.length; k++) {
		sum += arr[k];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
<<<<<<< HEAD
  let max = -Infinity;
  for (l=0; l<arrOfArr.length; l++){
	  if (func(arrOfArr[l])>max){
		  max=func(arrOfArr[l]);
	  }
  }
  return max
=======
  let max;

  // Ваш кода
  // for ...
  
  return max;
>>>>>>> 28ddd3309b8f284f7e1f48c1dc6a661a08dc5468
}

// Задание 3
function worker2(arr) {
  let max = arr[0];
  let min = arr[0];
  let diff;
  for (m=0; m<arr.length; m++){
	  if (arr[m]>max){
		  max=arr[m];
	  }
	  	  if (arr[m]<min) {
		  min=arr[m];
	  }
  }
  diff = max - min;
  return diff;
}
