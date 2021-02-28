 module.exports = function check(str, bracketsConfig) {
   
    let arr = [];
    for (let q = 0; q < str.length; q++) {
        arr += str[q];
    }
    let arr3 = [];
    for (let w = 0; w < str.length / 2; w++) {
        arr3 += str[w];
    }
    let arr2 = arr.slice(arr.length / 2);

     for (i = 0; i < arr3.length ; i++) {
         for (let j = 0; j < arr2.length; j++) {
             if (arr3[i] == arr2[j]) {
                return false;
             }
             else if( arr2 !== arr3.reverse){
                 return true;
             }
             else {
                 return false;
             }
         }
     }
}
