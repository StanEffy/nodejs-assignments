const arr = process.argv;
arr.forEach((a, i) => a.startsWith(`--`) ? console.log(`${a} is ${arr[i+1]}`) : null)
