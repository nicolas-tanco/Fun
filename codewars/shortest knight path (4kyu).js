//Given two different positions on a chess board, find the least number of moves it would take a knight to get from one to the other. The positions will be passed as two arguments in algebraic notation. For example, knight("a3", "b5") should return 1.
//
//The knight is not allowed to move off the board. The board is 8x8.


//My solution was to map every possible position at X moves

function knight(start, finish) {
    let s=[...start]
     let f=[...finish]
     if(s[0]=="a") s[0]=1
     if(s[0]=="b") s[0]=2
     if(s[0]=="c") s[0]=3
     if(s[0]=="d") s[0]=4
     if(s[0]=="e") s[0]=5
     if(s[0]=="f") s[0]=6
     if(s[0]=="g") s[0]=7
     if(s[0]=="h") s[0]=8
     if(f[0]=="a") f[0]=1
     if(f[0]=="b") f[0]=2
     if(f[0]=="c") f[0]=3
     if(f[0]=="d") f[0]=4
     if(f[0]=="e") f[0]=5
     if(f[0]=="f") f[0]=6
     if(f[0]=="g") f[0]=7
     if(f[0]=="h") f[0]=8
     s[1]=s[1]*1
     f[1]=f[1]*1
     let n=0
     let pos=[s]
     let rr=0
   
     while (rr==0){
         let pos1=[]
         
       for(i=0;i<pos.length;i++){
         let d=[[,],[,],[,],[,],[,],[,],[,],[,]]
         d[0][0]=pos[i][0]-1
         d[0][1]=2+pos[i][1]
 
         d[1][0]=pos[i][0]-2
         d[1][1]=1+pos[i][1]
 
         d[2][0]=pos[i][0]-2
         d[2][1]=pos[i][1]-1
         
         d[3][0]=pos[i][0]-1
         d[3][1]=pos[i][1]-2
         
         d[4][0]=pos[i][0]+1
         d[4][1]=pos[i][1]-2
        
         d[5][0]=pos[i][0]+2
         d[5][1]=pos[i][1]-1
         
         d[6][0]=pos[i][0]+2
         d[6][1]=pos[i][1]+1
         
         d[7][0]=pos[i][0]+1
         d[7][1]=pos[i][1]+2
         for(u=0;u<d.length;u++){
             if(d[u][0]<9 && d[u][0]>0 && d[u][1]<9 && d[u][1]>0){
 
             let zz=d[u]
              pos1.push(zz)
            }}
        
       }
       
    n++
    for(q=0;q<pos1.length;q++){
     if(pos1[q][0]==f[0] && pos1[q][1]==f[1]) rr+=1
 }
 pos=pos1
 }
     return n
            
 }