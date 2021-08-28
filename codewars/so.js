//1_ 


function countPatternsFrom(firstPoint, length) {
    if(length<1 || length>9) return 0
    if(length==1) return 1
    const puntoInicial=firstPoint.charCodeAt(0)-97
    const screen1=[0,0,0,
                    0,0,0,
                    0,0,0]
    screen1[puntoInicial]=2
    let sol1 = screen1
    let ronda1=1

    while(ronda1<length){
        ronda(sol1)
        ronda1++
    }
   
    function a (arr){
        const sol=[]
        arr[0]=1
        if(!arr[3]){
            arr[3]=2
            sol.push(Array.from(arr))
            arr[3]=0
        }else if(!arr[6]){
            arr[6]=2
            sol.push(Array.from(arr))
            arr[6]=0
        }
        if(!arr[7]){
            arr[7]=2
            sol.push(Array.from(arr))
            arr[7]=0
        }
        if(!arr[4]){
            arr[4]=2
            sol.push(Array.from(arr))
            arr[4]=0
        }else if(!arr[8]){
            arr[8]=2
            sol.push(Array.from(arr))
            arr[8]=0
        }
        if(!arr[5]){
            arr[5]=2
            sol.push(Array.from(arr))
            arr[5]=0
        }
        if(!arr[1]){
            arr[1]=2
            sol.push(Array.from(arr))
            arr[1]=0
        }else if(!arr[2]){
            arr[2]=2
            sol.push(Array.from(arr))
            arr[2]=0
        }
        sol1=sol
    }

    function e (arr){
  
        const sol = []
        arr[4]=1
        arr.forEach(e=>{
            if(!e){
                e=2
                sol.push(Array.from(arr))
                e=0
            }
        })
        sol1=sol
    }

    function c (arr){
        const sol=[]
        arr[2]=1
        if(!arr[1]){
            arr[1]=2
            sol.push(Array.from(arr))
            arr[1]=0
        }else if(!arr[0]){
            arr[0]=2
            sol.push(Array.from(arr))
            arr[0]=0
        }
        if(!arr[3]){
            arr[3]=2
            sol.push(Array.from(arr))
            arr[3]=0
        }
        if(!arr[4]){
            arr[4]=2
            sol.push(Array.from(arr))
            arr[4]=0
        }else if(!arr[6]){
            arr[6]=2
            sol.push(Array.from(arr))
            arr[6]=0
        }
        if(!arr[7]){
            arr[7]=2
            sol.push(Array.from(arr))
            arr[7]=0
        }
        if(!arr[5]){
            arr[5]=2
            sol.push(Array.from(arr))
            arr[5]=0
        }else if(!arr[5]){
            arr[5]=2
            sol.push(Array.from(arr))
            arr[5]=0
        }
        sol1=sol
    }

    function g (arr){
        const sol=[]
        arr[6]=1
        if(!arr[3]){
            arr[3]=2
            sol.push(Array.from(arr))
            arr[3]=0
        }else if(!arr[0]){
            arr[0]=2
            sol.push(Array.from(arr))
            arr[0]=0
        }
        if(!arr[1]){
            arr[1]=2
            sol.push(Array.from(arr))
            arr[1]=0
        }
        if(!arr[4]){
            arr[4]=2
            sol.push(Array.from(arr))
            arr[4]=0
        }else if(!arr[2]){
            arr[2]=2
            sol.push(Array.from(arr))
            arr[2]=0
        }
        if(!arr[5]){
            arr[5]=2
            sol.push(Array.from(arr))
            arr[5]=0
        }
        if(!arr[7]){
            arr[7]=2
            sol.push(Array.from(arr))
            arr[7]=0
        }else if(!arr[8]){
            arr[8]=2
            sol.push(Array.from(arr))
            arr[8]=0
        }
        sol1=sol
    }

    function i1 (arr){
        const sol=[]
        arr[0]=1
        if(!arr[5]){
            arr[5]=2
            sol.push(Array.from(arr))
            arr[5]=0
        }else if(!arr[2]){
            arr[2]=2
            sol.push(Array.from(arr))
            arr[2]=0
        }
        if(!arr[1]){
            arr[1]=2
            sol.push(Array.from(arr))
            arr[1]=0
        }
        if(!arr[4]){
            arr[4]=2
            sol.push(Array.from(arr))
            arr[4]=0
        }else if(!arr[0]){
            arr[0]=2
            sol.push(Array.from(arr))
            arr[0]=0
        }
        if(!arr[3]){
            arr[3]=2
            sol.push(Array.from(arr))
            arr[3]=0
        }
        if(!arr[7]){
            arr[7]=2
            sol.push(Array.from(arr))
            arr[7]=0
        }else if(!arr[6]){
            arr[6]=2
            sol.push(Array.from(arr))
            arr[6]=0
        }
        sol1=sol
    }

    function b(arr){
        const sol =[]
        arr[1]=1
        if(!arr[0]) {
            arr[0]=2
            sol.push(Array.from(arr))
            arr[0]=0
        }
        if(!arr[2]) {
            arr[2]=2
            sol.push(Array.from(arr))
            arr[2]=0
        }
        if(!arr[3]) {
            arr[3]=2
            sol.push(Array.from(arr))
            arr[3]=0
        }
        if(!arr[4]) {
            arr[4]=2
            sol.push(Array.from(arr))
            arr[4]=0
        }else if(!arr[7]){
            arr[7]=2
            sol.push(Array.from(arr))
            arr[7]=0
        }
        if(!arr[5]) {
            arr[5]=2
            sol.push(Array.from(arr))
            arr[5]=0
        }
        if(!arr[6]) {
            arr[6]=2
            sol.push(Array.from(arr))
            arr[6]=0
        }
        if(!arr[8]) {
            arr[8]=2
            sol.push(Array.from(arr))
            arr[8]=0
        }
        sol1=sol
    }

    function d(arr){
        const sol =[]
        arr[3]=1
        if(!arr[0]) {
            arr[0]=2
            sol.push(Array.from(arr))
            arr[0]=0
        }
        if(!arr[2]) {
            arr[2]=2
            sol.push(Array.from(arr))
            arr[2]=0
        }
        if(!arr[1]) {
            arr[1]=2
            sol.push(Array.from(arr))
            arr[1]=0
        }
        if(!arr[4]) {
            arr[4]=2
            sol.push(Array.from(arr))
            arr[4]=0
        }else if(!arr[5]){
            arr[5]=2
            sol.push(Array.from(arr))
            arr[5]=0
        }
        if(!arr[7]) {
            arr[7]=2
            sol.push(Array.from(arr))
            arr[7]=0
        }
        if(!arr[6]) {
            arr[6]=2
            sol.push(Array.from(arr))
            arr[6]=0
        }
        if(!arr[8]) {
            arr[8]=2
            sol.push(Array.from(arr))
            arr[8]=0
        }
        sol1=sol
    }

    function f(arr){
        const sol =[]
        arr[5]=1
        if(!arr[0]) {
            arr[0]=2
            sol.push(Array.from(arr))
            arr[0]=0
        }
        if(!arr[2]) {
            arr[2]=2
            sol.push(Array.from(arr))
            arr[2]=0
        }
        if(!arr[1]) {
            arr[1]=2
            sol.push(Array.from(arr))
            arr[1]=0
        }
        if(!arr[4]) {
            arr[4]=2
            sol.push(Array.from(arr))
            arr[4]=0
        }else if(!arr[3]){
            arr[3]=2
            sol.push(Array.from(arr))
            arr[3]=0
        }
        if(!arr[7]) {
            arr[7]=2
            sol.push(Array.from(arr))
            arr[7]=0
        }
        if(!arr[6]) {
            arr[6]=2
            sol.push(Array.from(arr))
            arr[6]=0
        }
        if(!arr[8]) {
            arr[8]=2
            sol.push(Array.from(arr))
            arr[8]=0
        }
        sol1=sol
    }

    function h(arr){
        const sol =[]
        arr[7]=1
        if(!arr[0]) {
            arr[0]=2
            sol.push(Array.from(arr))
            arr[0]=0
        }
        if(!arr[2]) {
            arr[2]=2
            sol.push(Array.from(arr))
            arr[2]=0
        }
        if(!arr[3]) {
            arr[3]=2
            sol.push(Array.from(arr))
            arr[3]=0
        }
        if(!arr[4]) {
            arr[4]=2
            sol.push(Array.from(arr))
            arr[4]=0
        }else if(!arr[1]){
            arr[1]=2
            sol.push(Array.from(arr))
            arr[1]=0
        }
        if(!arr[5]) {
            arr[5]=2
            sol.push(Array.from(arr))
            arr[5]=0
        }
        if(!arr[6]) {
            arr[6]=2
            sol.push(Array.from(arr))
            arr[6]=0
        }
        if(!arr[8]) {
            arr[8]=2
            sol.push(Array.from(arr))
            arr[8]=0
        }
        sol1=sol
    }

    function ronda(screen){
       
        if(screen.length==9){
        let i = screen.indexOf(2)
        switch (i) {
          case 0:
            a(screen)
            break;
          case 1:
              b(screen)
              break;
              case 2:
                c(screen)
                break;
              case 3:
                  d(screen)
                  break;
                  case 4:
                    e(screen)
                    break;
                  case 5:
                      f(screen)
                      break;
                      case 6:
                      g(screen)
                        break;
                      case 7:
                          h(screen)
                          break;
          default:
            i1(screen)
            break;
        }
    }else{
        screen.forEach(e1=>{
            let i = e1.indexOf(2)
            switch (i) {
              case 0:
                a(e1)
                break;
              case 1:
                  b(e1)
                  break;
                  case 2:
                    c(e1)
                    break;
                  case 3:
                      d(e1)
                      break;
                      case 4:
                        e(e1)
                        break;
                      case 5:
                          f(e1)
                          break;
                          case 6:
                          g(e1)
                            break;
                          case 7:
                              h(e1)
                              break;
              default:
                i1(e1)
                break;
        }})
    }
  
      }
      return sol1.length
}

console.log(countPatternsFrom("d",3))