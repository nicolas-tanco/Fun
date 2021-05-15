//Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:
//
//12 ==> 21
//513 ==> 531
//2017 ==> 2071
//nextBigger(num: 12)   // returns 21
//nextBigger(num: 513)  // returns 531
//nextBigger(num: 2017) // returns 2071
//If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift):
//
//9 ==> -1
//111 ==> -1
//531 ==> -1

function nextBigger(n){
    let p=n.toString()
    let m = [...p]
    for(let i=(m.length-2);i>=0;i--){
       let mm=m[i]
     let k=m.slice(i+1)
     let f=[]
     for(q=0;q<k.length;q++){ if(k[q]>m[i]) f.push(k[q])}
     let ff=f.sort()
     if(ff[0]>m[i]){
        m[i]=ff[0]
     k[k.indexOf(ff[0])]=mm
     let kk=k.sort()
     let mmm=m.slice(0,i+1)
     let kkk=mmm.join("")
     let rr=kk.join("")
     let sol=kkk+rr
     return Number (sol)
    }}
     return -1
 }