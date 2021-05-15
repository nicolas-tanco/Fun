//The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.
//
//Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
//
//Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?
//
//Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO.



function tickets(peopleInLine){
    let b25=0
    let b50=0
   for (i=0;i<peopleInLine.length;i++){
     if(peopleInLine[i]==25){
       b25++
     }else if(peopleInLine[i]==50 && b25>0) {
       b50++
       b25-- 
     }else if (peopleInLine[i]==100 && b50>0 && b25>0){
       b50--
       b25--
     }else if(peopleInLine[i]==100 && b25>2){ 
     b25-=3}
     else {return "NO"}
   }
     return "YES"
  }