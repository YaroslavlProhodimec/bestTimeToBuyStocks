let price1 = [7, 1, 5, 3, 6, 4]; // 7
let price2 = [7, 6, 4, 3, 1];

let maxProfit = (arr) => {
let result = 0
  for (let i = 0; i < arr.length; i++) {
    if(arr[i] > arr[i-1]) {
      result += arr[i] - arr[i-1]
    }
  }
  return result
};



const maxProfit = (x) => {
  let result = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] < x[i + 1]) {
      result +=  x[i + 1] - x[i]
    }
  }
return result
};


console.log(maxProfit(price1));