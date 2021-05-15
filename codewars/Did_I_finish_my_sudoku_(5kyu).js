//Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter. If the board is valid return 'Finished!', otherwise return 'Try again!'

function doneOrNot(board){
    for(k=0;k<9;k++){
    for(i=1;i<=9;i++){
     if(board[k].includes(i)==false) return "Try again!"
    }
    }
    for(l=0;l<9;l++){
      let qq=[]
    for(w=0;w<9;w++){
     qq.push(board[w][l])}
    for(z=1;z<=9;z++){
      if(qq.includes(z)==false) return "Try again!"
    }
  } 
  let tt=[0,0,0]
  for(kk=0;kk<3;kk++){
    let rr=board[kk][0]
  for(ww=1;ww<=2;ww++){
   
    rr+=board[kk][ww]
     tt[kk]=rr
  }
  }
  console.log(tt);
  if(tt[0]+tt[1]+tt[2]!=45){
    return "Try again!"
  }
  return "Finished!"
}

console.log(doneOrNot([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]]));