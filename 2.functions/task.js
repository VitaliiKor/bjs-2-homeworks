// Задание 1
function getArrayParams(arr) {
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

  return { min:min, max:max, avg:avg };
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
  let max = -Infinity;
  for (l=0; l<arrOfArr.length; l++){
	  if (func(arrOfArr[l])>max){
		  max=func(arrOfArr[l]);
	  }
  }
  return max
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
