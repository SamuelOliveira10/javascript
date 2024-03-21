const arr = [1, 2, 3];
    arr.regEx = /^[A-Za-z]+$/
    let num = 90509958
    let str = "Samuel"
    console.log(arr.regEx.test(num)) // false 
    console.log(arr.regEx.test(str)) // true 

