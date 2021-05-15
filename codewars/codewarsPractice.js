////sumatoria de todos los multiplos de 3 y 5 hasta u
//function solution(u){
//    let x=0
//    if (u>=0){
//    for(let i=1;i<u;i++){
//      if (i%3==0||i%5==0) x=x+i
//    }  return x} else{
//      return 0
//    }
//  }
//
//  console.log(solution(10))
//
//  //sumatoria de los ultimos 3 componentes del array signature hasta que signature.length sea n
//
//  function tribonacci(signature,n){
//    if (n==0){
//      signature.pop()
//      signature.pop()
//      signature.pop()
//     return signature}
//    else if (n==1){
//      signature.pop()
//      signature.pop()
//      return signature
//    }else if(n==2){
//      signature.pop()
//      return signature
//    }else if(n==3){
//      return signature
//    }else{
//      
//   for (let i=2;i<(n-1);i++){
//     signature.push(signature[i-2]+signature[i-1]+signature[i])
//   }return signature
//  }
//  }
//
//var str = "HELLO WORLD";
//var res = str.charAt(0);
//console.log(res)
//
//console.log(Number("1 2 3"))
//
//
//
////The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.
////
////Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
////
////Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?
////
////Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.
//
//function tickets(peopleInLine){
//    let d=25
//    let q=0
//    let a
//    console.log(peopleInLine.length)
//    if ( peopleInLine[0]>25) return "NO"
//    for(let i=1; i<peopleInLine.length;i++){
//      if (peopleInLine[i]<26) d=d+25
//      if (peopleInLine[i]>26) q = peopleInLine[i]-d
//      if (q>d){ a="NO"}else{d=d-q}
//      }
//    if (a=="NO") {
//    return "NO"}else{
//        return "YES"
//    }
//    }
//
//    console.log(tickets([25,25,25,25,50,25,10000]))
//
//
///////////////////////////////////////////////////////////
////You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
// function getMiddle(s)
//{  
//  if (s.length % 2 ==0) {
//  return s.charAt(s.length/2-1) + s.charAt(s.length/2)
//}
//  else return s.charAt(s.length-2)
//}
//
//console.log(getMiddle("ags"))
//console.log(getMiddle("agsd"))
//
//let aa="asdg"
//console.log(aa.length)
//console.log(aa.charAt(1),aa.charAt(2))
//
//
////////////////////
//
////The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
////
////Examples
////"din"      =>  "((("
////"recede"   =>  "()()()"
////"Success"  =>  ")())())"
////"(( @"     =>  "))(("
//function duplicateEncode(word){
//  let z = ""
//    word=word.toLowerCase()
//  for(i=0;i<word.length;i++){
//    let a = word.charAt(i)
//    let b=word.substring(0, i)+ word.substring(i+1)
//    b.includes(a)? z=z+")":z=z+"("
//  }
//return z
//}
//
////
//
//
//
//function songDecoder(song){
//  for (i=0;i<=song.length-3;i++){
//   song= song.replace("WUB"," ")
//   song=song.replace("  "," ")
//}
//return song.trim()
//}
//
//console.log(songDecoder("WUBAWUBBWUBCWUB"))
//console.log(songDecoder("AWUBBWUBC"))
//console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"))
//
//
//
//
//function songDecoder1(song){
//  for (i=0;i<=song.length-3;i++){
//   song= song.replace("WUBWUB"," ")
//   song=song.replace("WUB"," ")
//   song=song.replace("  "," ")
//}
//return song.trim()
//}
//
//console.log(songDecoder1("WUBAWUBBWUBCWUB"))
//console.log(songDecoder1("AWUBBWUBC"))
//console.log(songDecoder1("AWUBWUBWUBBWUBWUBWUBC"))
///////
//
////You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
//
//function findOutlier(inte){
//  let a=0
//  let b=0
//  let c=0
//if (inte==undefined) return 0
//for (i=0;i<=2;++i) {if (inte[i]%2==0){a=a+1}else {b=b+1}}
//
//if(a>b) for (i=0;i<=inte.length-1;i++) if (inte[i]%2!=0) c=inte[i];
//if(a<b) for (i=0;i<=inte.length-1;i++) if (inte[i]%2==0) c=inte[i];
//return c}
//
//console.log(findOutlier())
//
//
//// Se puede hacer con n/2
//
//function isPrime(num) {
//  if (num<=1) return false
//  if (num==2) return true
//  let k=0
//  for(let i=2;i<=num-1;i++) if (num%i==0) k++
//  if (k>0) return false
//  else return true
//}
//
//
//
//////////////////
//
////function ordenAlfabetico(arr){
////let q=new Array
////let arr1=new Array
////let k=0
////let w=0
////console.log(arr.length)
////while (k<arr.length){
////for (let i=0;i<=arr.length-1;i++){
////  w+=arr[k].localeCompare(arr[i])
////  }
////q[k]=w
////w=0
////k++
////}
////for (i=0;i<=q.length-1;i++) for (n=0;n<=(q.length-1)*2;n+=2)if(q[i]==q.length-1-n){arr1[q.length-1-n/2]=arr[i]}
////return arr1
////}
////
////function buscarEnArray(arr1,arr2){
////  let r=new Array
////  let arr1=new Array
////  for(let e=0;e<=arr1.length-1;e++){
////     r.push(0) }
////  for(let l=0;l<arr1.length;l++) for(z=0;z<arr2.length;z++) if (arr2[z].includes(arr1[l])) r[l]+=1
////  for (let b=0;b<r.length;b++) if(r[b]>0) arr1.push(arr1[b])
//// 
////}
////
////console.log(buscarEnArray(["xyz", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]))
//
//
////////////////////////
//////////////////////////
//////////////////There is an array with some numbers. All numbers are equal except for one. Try to find it!
//
/////findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
/////findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
/////It’s guaranteed that array contains at least 3 numbers.
/////
/////The tests contain some very huge arrays, so think about performance.
////
////function qqq(arr){
////  let k=0
////  while (k<2){
////   for (let i=0;i<arr.length;i++) {for(j=0;j<arr.length;j++)  {if(arr[i]!=arr[j]) k++} k=0}
////
////  }
////  return arr[i]
////}
//////console.log(qqq([ 1, 1, 1, 2, 1, 1 ]))
//
//
//function dada(j){
//  let k=[]
//  for(i=0;i<j.length;i++){
//      if(typeof Number(j.charAt(i))=="number") k.pop(Number(j.charAt(i)))
//  }
//  console.log(k)
//  return Math.max(...k)+" "+Math.min(...k)
//}
////let j="1 9 3 4 -5"
////console.log(dada("1 9 3 4 -5"))
////console.log(typeof Number(j.charAt(i))=="number");
////
////function anagrams(word, words)  {
////let pp={}
////for (w=0;w<words.length;w++){
////   pp[w]=words[w]
////}
////let q=words
////let z=[]
////for(i=0;i<words.length;i++){
////for(k=0;k<word.length;k++){
////  if(q[i].includes(word[k])){
////      let w=word[k]
////   q[i]= (words[i].replace(w,""))
////}
////
////}
////
////if (words[i]=="") {z.push(pp[i])}
////
////}
////return z
////}
////
////console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']))
//l//et concesionaria = {
 //   autos:[{
 //      marca: "Ford",
 //      modelo:"Fiesta",
 //      precio:150000,
 //      km: 200,
 //      color: "Azul",
 //      cuotas: 12,
 //      anio: 2019,
 //      patente: "APL123",
 //      vendido: false,
 //  }, {   marca: "Toyota",
 //      modelo:"Corolla",
 //      precio:100000,
 //      km: 0,
 //      color: "Blanco",
 //      cuotas: 14,
 //      anio: 2019,
 //      patente: "JJK116",
 //      vendido: false,
 //  
 //  }],
 //   
 //     buscarAuto:   function(patentes){
 //        for(let i=0;i<this.autos.length;i++){                  if(this.autos[i].patente===patentes){
 //              return this.autos[i]
 //           }
 //        }
 //        return null
 //     },
 //  
 //     venderAuto: function (patent){
 //         let a= this.buscarAuto(patent)
 //         for(i=0;i<this.autos.length;i++){
 //            if(this.autos[i]==a) this.autos[i].vendido=true
 //         }
 //  },
 //  
 //     autosParaLaVenta:function(){
 //        let arr=[]
 //        for(i=0;i<this.autos.length;i++) {
 //           if(this.autos[i].vendido===false){
 //              arr.push(this.autos[i])
 //           }
 //     }
 //     return arr
 //  },
 //     
 //     autosNuevos: function(){
 //            let arr=[]
 //            let b=this.autosParaLaVenta()
 //            for(i=0;i<b.length;i++){
 //               if(b[i].km<100){
 //                  arr.push(b[i])
 //               }
 //            }
 //            return arr
 //         },
 //  
 //     listaDeVentas: function(){
 //        let arr=[]
 //        console.log(this.autos[0][0]);
 //        for(i=0;i<this.autos.length;i++) {
 //           if(this.autos[i].vendido===true){
 //              arr.push(this.autos[i].precio)
 //           }
 //     }
 //       return arr
 //  }
 //  ,
 //  
 //     totalDeVentas: function(){
 //       let a=this.listaDeVentas()
 //       if(a.length==0){ return 0}else{
 //       for(i=1;i<a.length;i++) { a[0]+=a[i] }
 //       return a[0]
 //     }},
 //     
 //     puedeComprar: function(p,a){  
 //       let auto=1
 //       let persona=2
 //       console.log(a.length);
 //     if(a.length>=4){
 //          auto=a
 //         persona=p
 //     } else{
 //        auto=p
 //         persona=a
 //     }
 //     console.log(auto);
 //     if(persona.capacidadDePagoTotal>auto.precio && persona.capacidadDePagoEnCuotas>auto.precio/auto.cuotas){
 //        return true
 //     } else{
 //        return false
 //     }
 //     }
 //     
 //  }
////oncesionaria.venderAuto("JJK116")c//oncesionaria.listaDeVentas()
////onsole.log(concesionaria.puedeComprar({
// //   nombre: "Juan",
// //   capacidadDePagoEnCuotas: 10000,
// //   capacidadDePagoTotal: 100000
// //   },{
// //       marca: "Ford",
// //       modelo:"Fiesta",
// //       precio:90000,
// //       km: 200,
// //       color: "Azul",
// //       cuotas: 12,
// //       anio: 2019,
// //       patente: "APL123",
// //       vendido: false,
// //   }));
////
// //   let a={
// //       nombre: "Juan",
// //       capacidadDePagoEnCuotas: 10000,
// //       capacidadDePagoTotal: 100000
// //       }
// //
// //   console.log(typeof a.capacidadDePagoEnCuot=="number");
//
//    let concesionaria = {
//        autos:[{
//           marca: "Ford",
//           modelo:"Fiesta",
//           precio:150000,
//           km: 200,
//           color: "Azul",
//           cuotas: 12,
//           anio: 2019,
//           patente: "APL123",
//           vendido: false,
//       }, {   marca: "Toyota",
//           modelo:"Corolla",
//           precio:100000,
//           km: 0,
//           color: "Blanco",
//           cuotas: 14,
//           anio: 2019,
//           patente: "JJK116",
//           vendido: false,
//       
//       }],
//        
//          buscarAuto:   function(patentes){
//             for(let i=0;i<this.autos.length;i++){                  if(this.autos[i].patente===patentes){
//                   return this.autos[i]
//                }
//             }
//             return null
//          },
//       
//          venderAuto: function(patente) {
//               auto = this.buscarAuto(patente)
//               console.log(auto);
//               auto.vendido = true
//           },
//       
//          autosParaLaVenta:function(){
//             let arr=[]
//             for(i=0;i<this.autos.length;i++) {
//                if(this.autos[i].vendido===false){
//                   arr.push(this.autos[i])
//                }
//          }
//          return arr
//       },
//          
//          autosNuevos: function(){
//                 let arr=[]
//                 let b=this.autosParaLaVenta()
//                 for(i=0;i<b.length;i++){
//                    if(b[i].km<100){
//                       arr.push(b[i])
//                    }
//                 }
//                 return arr
//              },
//       
//          listaDeVentas: function(){
//             let arr=[]
//             for(i=0;i<this.autos.length;i++) {
//                if(this.autos[i].vendido===true){
//                   arr.push(this.autos[i].precio)
//                }
//          }
//            return arr
//       }
//       ,
//       
//          totalDeVentas: function(){
//            let a=this.listaDeVentas()
//            if(a.length==0){ return 0}else{
//            for(i=1;i<a.length;i++) { a[0]+=a[i] }
//            return a[0]
//          }},
//          
//        puedeComprar:function(auto,persona) {
//               let capacidadCuota = (auto.precio/auto.cuotas)
//               let capacidadCuotaPersona = persona.capacidadDePagoEnCuotas
//               let capacidadPagoPersona = persona.capacidadDePagoTotal
//               let precioAuto = auto.precio
//               if (capacidadCuotaPersona >= capacidadCuota && capacidadPagoPersona >= precioAuto) {
//                   return true
//               } else{
//                   return false
//               }
//           },
//           autosQuePuedeComprar: function(persona){
//            let arr=[]
//              a= this.autosParaLaVenta()
//              console.log(11111,a,a[0].precio);
//             for(i=0;i<a.length;i++) {
//                console.log("kkkkk",a[i]);
//       if(this.puedeComprar(a[i],persona) ===true){
//           arr.push(this.puedeComprar(a[i],persona) )
////               }
//// } return arr
//// 
////}}
////
////console.log(concesionaria.autosQuePuedeComprar({
////   nombre: "Juan",
////   capacidadDePagoEnCuotas: 10000,
////   capacidadDePagoTotal: 100000
////   }));
//
//function sumStrings(a1,b1) { 
//  let a=[...a1]
//  let b=[...b1]
//  
//if(a.length<b.length){
//    for(i=1;i<=b1.length-a1.length;i++){
//        a.unshift(0)
//    } }else if(a.length>b.length){
//        for(i=1;i<=a1.length-b1.length;i++){
//            b.unshift(0)
//    }
//}
//
//for(i=0;i<a.length;i++){
//    a[i]=Number(a[i])+Number(b[i])
//    
//}
//
//for (i=a.length-1;i>0;i--){
//    if(a[i]>=10){
//        a[i]=a[i]-10
//        a[i-1]=a[i-1]+1
//    }
//}
//
//let u=0
//while(a[u]==0){
//    a.shift()
//    u++
//}
//return a.join("")
//}
//                                       
////                                       
////
//
//function sumIntervals(intervals){
//    let k=0
//    
//  for (i=0;i<intervals.length-1;i++){
//        
//        let a=intervals.slice(i+1)
//        for(v=0;v<a.length;v++){
//          if(a[v][0]>=intervals[i][0] && a[v][1]<=intervals[i][1]){ 
//            intervals[i+1+v]=[0,0] 
//            continue}
//          if(a[v][0]<=intervals[i][0] && a[v][1]>=intervals[i][1]) {
//            intervals[i]=[0,0]
//            continue}
//          if(intervals[i][1]<a[v][1] && intervals[i][1]>a[v][0]) {
//            intervals[i][1]=a[v][0]
//            continue}
//          if(intervals[i][0]<a[v][1] && intervals[i][0]>a[v][0]) {
//            intervals[i][0]=a[v][1]
//            continue}
//        }    
//  }
//
//  intervals.forEach(e => k+=e[1]-e[0])
//    
//  
//  return k
//}
//
//  console.log(sumIntervals([ [ 1, 12 ], [ 3, 6 ], [ 5, 8 ], [ 7, 10 ], [ 9, 12 ] ]))


  let r={
    f: 9,
    g:0,
    d: function(){
      return 1+1
    }
  }

  let z=r.d()

  console.log(z);

