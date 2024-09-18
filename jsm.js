const count = (arry) => {
    let aCount = 0;
    let bCount = 0;
    let cCount = 0;
 for (let i = 0; i < arry.length; i++) {
       
        if (arry[i] === 'a') {
            aCount++;
        } else if (arry[i] === 'c') {
            cCount++;
        } else  {
            bCount++;
        }
    }  
    return { a: aCount, b: bCount, c: cCount };
}
const correctArray = ['a', 'c', 'b', 'c', 'a', 'a'];
const result = count(correctArray);
console.log(result)