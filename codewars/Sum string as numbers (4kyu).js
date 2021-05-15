//Given the string representations of two integers, return the string representation of the sum of those integers.
//
//For example:
//
//sumStrings('1','2') // => '3'
//A string representation of an integer will contain no characters besides the ten numerals "0" to "9".


function sumStrings(a1,b1) { 
    let a=[...a1]
    let b=[...b1]
    
  if(a.length<b.length){
      for(i=1;i<=b1.length-a1.length;i++){
          a.unshift(0)
      } }else if(a.length>b.length){
          for(i=1;i<=a1.length-b1.length;i++){
              b.unshift(0)
      }
  }
  
  for(i=0;i<a.length;i++){
      a[i]=Number(a[i])+Number(b[i])
      
  }
  
  for (i=a.length-1;i>0;i--){
      if(a[i]>=10){
          a[i]=a[i]-10
          a[i-1]=a[i-1]+1
      }
  }
  
  let u=0
  while(a[u]==0){
      a.shift()
      u++
  }
  return a.join("")
  }