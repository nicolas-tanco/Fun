/* function minSubArrayLen(arr,n){
  if(arr[0]>=n) return 1
  let sum=arr[0]
  let u = 0
  let i =0
  while(sum<n){
    u++
    sum+=arr[u]
  }
  let minLength=arr.length

  while(i<arr.length && u <arr.length){
    if(sum<n){
      u++
      sum+= arr[u]
    }else{
      if((u-i)< minLength) minLength=u-i
      sum-=arr[i]
      i++
    }
  }
  return minLength==arr.length? 0 : minLength+1
}


console.log(minSubArrayLen([3],9))


function findLongestSubstring(str){
  let seen = {}
  let start = 0
  let maxLength=0
  for(i=0;i<str.length;i++){
    if(seen[str[i]]){
      start=Math.max(start, seen[str[i]])
    }
    seen[str[i]]=i+1
    maxLength=Math.max(maxLength,i-start+1)

  }
  return maxLength
}
console.log(findLongestSubstring("longestsubstring"))

let dd= "aaaaa"
dd[2]="b"
console.log(dd);

function lastDigit(as){
  if(as.length==0) return 1
  if(as.length==1){
    let str = as[0].toString()
    return parseInt(str[str.length])
  }
  
}

function factorial(n){
  if(n==1) return 1
  n--
  return (n+1)*factorial(n)
}

console.log(factorial(5));

function spinWords(string){
  let arr = [...string]
  let start = 0
  for(i=0;i<arr.length;i++){
    if(arr[i] == " "){
        if(i-start>=5){
              for(u=start;u<i;u++){
                arr[u]=string[i-(u-start)-1]
              }
        }
        start=i+1
    }   
  }
  if(string.length-start>=5){
    for(u=start;u<string.length;u++){
      arr[u]=string[i-(u-start)-1]
    }
  }
  return arr.join("")
}

console.log(spinWords("welcome"))


function calculate(recs){
  let max = 0
  let map = []
  recs.forEach(e=>e.forEach(b=>max=Math.max(max,b)))
  for(let i = 0 ; i<max;i++){
    let arr = []
    for(let u=0;u<=13;u++){
      arr.push(0)
    }
    map.push(arr)
  }

  for(let i = 0; i<recs.length;i++){

  }

}

console.log(calculate([[3,3,8,5], [6,3,8,9], [11,6,14,12]])) */

/* 
function flatten(arr){
  let count = 0
  let arr1= []
  arr.forEach(e=>{
      if(typeof e =="number"){
          count++
          arr1.push(e)
      }else{
          console.log("*************")
          
          arr1.push(...e)
          
      }
  })
  console.log(arr1)
  if(count== arr.length) return arr1
  else return flatten(arr1)
}

console.log(flatten([1,2,3,[4,5]]));

console.log([1,2,3].concat([4,5])) */
  
/* function capitalizeFirst (arr) {
  if(!arr.length)return []
  
  return [arr[0][0].toUpperCase()+arr[0].slice(1)].concat(capitalizeFirst (arr.slice(1)))
}

 
capitalizeFirst(['car','taco','banana'])) // ['Car','Taco','Banana'] */
/*  
 function nestedEvenSum (ob) {
  let sol = 0
  
  function helper(obj){
  for(var o in obj){
      if(obj[o]%2==0 ) sol+=obj[o]
      else if(typeof obj[o]=="object"){
          
              helper(obj[o])
          
      }
  }
  }
  helper(ob)
  
  return sol
  
}


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log( nestedEvenSum(obj1))

function collectStrings(obj){
  let sol = []
  function helper(obj1){
  for(var o in obj1){
      if(typeof obj1[o]== "string") sol.push(obj1[o])
      else if (typeof obj1[o]=="object") helper(obj1[o])
  }
}
helper(obj)
return sol
}

console.log(collectStrings({
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}));


function stringifyNumbers(ob){
    let sol = {}
  function helper(obj){
  for(var o in obj){
      if(typeof obj[o]== "number") sol[o]=obj[o].toString()
      else if(typeof obj[o]=="object") helper(obj[o])
      else sol[o]=obj[o]
  }
  } 
  helper(ob)
  return sol
}

console.log(stringifyNumbers({
  num: 1,
  test: [],
  data: {
      val: 4,
      info: {
          isR/* ight: true,
          random: 66
      }
  }
})); */
/* 
function binarySearch(arr,n){
  let lowerBound = 0
 let upperBound = arr.length-1
 let i

 while(upperBound-lowerBound>=1){
   i = Math.round((upperBound+lowerBound)/2)
   if(n>arr[i]){
     lowerBound=i
    }else if(arr[i]>n){
      upperBound = i
    }else if(n==arr[i]){
      return i
    }
    if(upperBound-lowerBound==1 && arr[lowerBound]!=arr[upperBound]){
      return -1
    }
    if(n>arr[upperBound] || n<arr[lowerBound]) return -1
    if(arr[lowerBound]==n) return lowerBound
    if(arr[upperBound]==n) return upperBound
}
}

console.log(binarySearch([1,2,3,4,5],5))

function searchSubstring(str, sub){
  let sol = 0
  let c=str.length-sub.length
  for(i=0;i<=c;i++){
    if(str[i]==sub[0]){
      if(sub==str.substring(i,i+sub.length)) sol++
    }
  }
  return sol
}

console.log(searchSubstring("omgomg","omg"));  */

/* function solution(input, markers) {
  
  
  let count = 0
  let first = 0
  markers.forEach(element => {
    if(input.includes(element)) {
      if(!count) first=input.indexOf(element)
      count++
  }});

  if(!count) return input
  let str = input.substring(first)
  let index = -1
  for(i=0;i<str.length-1;i++){
    if(str[i]=="\n") index=i-1
  }
  str = index==-1? "": str.substring(index)
  console.log(input.substring(0,first))
  console.log(str)
  return input.substring(0,first).trim().concat(solution(str,markers))
  
};

console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])) */

/* function kadane(arr){
  let firstPositive = arr.find(e=>e>=0)
  if(firstPositive==-1){
    let max =0
    let ind =0
    arr.forEach((element,i) => {
      if(element>=max) {
        max=element
        ind=i
    }});
    return arr[ind]
  }

  let left=firstPositive
  let right=firstPositive
  let localSum= 0
  let totalSum = firstPositive

  for(i=firstPositive;i<arr.length;i++){
    if(arr[i]<0) localSum+=arr[i]
    if(arr[i]>=0){
      if(arr[i]-totalSum>=0 && arr[left]-totalSum>=0){
        right=i
        localSum=0
      }else if(arr[i]-totalSum>=0 && arr[left]-totalSum<0){
        left=i
        localSum=0
      }
    } 
  }
} */
/* 
function bubbleSort(arr){
  let swap 
  let loop=0
  do{
    swap=false
    for(i=0;i<arr.length-1-loop;i++){
      if(arr[i]>arr[i+1]){
        swap=true
        let temp = arr[i+1]
        arr[i+1]=arr[i]
        arr[i]= temp
      }
    }
    loop++
  }while(swap)

  return arr
}

console.log(bubbleSort([1,3,4,2,5,6,7,9,3,4,5,6,7,8,10,2,3,1,1,3,45,6,7,8,8,6,4,3,1,2,3,4,5,3,3,3,333333,300,-4,-10,0])) */

/* function selectionSort(arr){
  for(i=0;i<arr.length-1;i++){
    let min=Infinity
    let index=0
   for(u=i;u<arr.length;u++){
     if(arr[u]<min){
       index=u
       min=arr[u]
     }
   }/* 
   let temp = arr[index]
        arr[index]=arr[i]
        arr[i]= temp
  }
  return arr
}

console.log(selectionSort([9,28,-4,10,10,300,-200])) */
/* 
function insertionSort(arr){
  for(i=1;i<arr.length;i++){
    let current = arr[i]
    for(let u=i-1;u>=0;u--){
      if(arr[u]>=current){
       arr[u+1]=arr[u]
      }else{
        arr[u+1]=current
        break
      }
    }
  }
  return arr
}

console.log(insertionSort([3,2,6,7,-4,10000,-8])) */ 
/* 
function mergeArrays(arr1,arr2){
  let left = 0
  let right = 0
  let sol = []
  for(i=1;left<arr1.length && right<arr2.length ;i++){
    if(arr1[left]<=arr2[right]){
      sol.push(arr1[left])
      left++
    }else{
      sol.push(arr2[right])
      right++
    }
  }
  while(left<arr1.length){
    sol.push(arr1[left])
    left++
  }
  while (right<arr2.length){
    sol.push(arr2[right])
    right++
  }
  return sol
}

console.log(mergeArrays([1,9],[-5,3,19]));

function mergeSort(arr){
  if(arr.length<=1) return arr
  let mid = Math.floor(arr.length/2)
  let left = mergeSort(arr.slice(0,mid))
  let right = mergeSort(arr.slice(mid))
  return mergeArrays(left,right)
}

console.log(mergeSort([9,3,1000,7]));

function rotate(arr) {

  let arr1 = []
  arr.forEach(element => {
    arr1.push(Array(arr.length))
  });

  let middle= Math.floor(arr.length/2)

  arr1[middle][middle]= arr[middle][middle]
  
} */

var twoSum = function(nums, target) {
    
  let obj= {}
  for(i=0;i<nums.length;i++){
      obj[nums[i]]=i
  }
  for(let o in obj){
      if(obj[target-o]){
          return [obj[o],obj[target-o]].sort((a,b)=>a-b)
      }
  }
  
};

console.log(twoSum([3,3],6));