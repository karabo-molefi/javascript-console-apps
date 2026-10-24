var arr1 = [3, 8, 7, 6, 5, -4, 3, 2, 1];

// A compare function sorts numerically (sort() alone sorts as text)
console.log(arr1.sort((a, b) => a - b).join(","));
