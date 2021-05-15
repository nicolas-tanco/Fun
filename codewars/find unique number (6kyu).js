//There is an array with some numbers. All numbers are equal except for one. Try to find it!
//
//findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
//findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
//It’s guaranteed that array contains at least 3 numbers.
//
//The tests contain some very huge arrays, so think about performance.
//
//This is the first kata in series:



function findUniq(arr) {
    let e=0
    let a=0
      for (i=0; i<=Math.floor((arr.length-1)/2);i++) if(arr[i]!=arr[arr.length-1-i]) {
        if(i!=Math.floor((arr.length-1)/2)){
          arr[i]==arr[i+1]?e=arr[arr.length-1-i]:e= arr[i]
          a=2
        } else {
          arr[i]==arr[i-1]?e=arr[arr.length-1-i]:e= arr[i]
          a++
        }
      } 
    if (a==0)  e= arr[Math.floor((arr.length-1)/2)] 
    return [e,a]
    }

    console.log(findUniq([ 3, 10, 3, 3, 3 ]))