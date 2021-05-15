const saldo = document.getElementById("saldo")
const img = [document.getElementById("img1"),document.getElementById("img2"),document.getElementById("img3")]
const win= document.getElementById("win")


function grid() {
    let suerte = Math.random() * 100
    if (suerte <= 40) {
        return 1
    } else if (suerte <= 70) {
        return 2
    } else if (suerte <= 90) {
        return 3
    } else {
        return 4
    }
}

function ganancia(slot) {
    
    if (slot[0] == 1 || slot[1] == 1 || slot[2] == 1) {
        return 0
    } else if (slot[0] == 2 && slot[1] == 2 && slot[2] == 2) {
        return 5
    } else if (slot[0] == 3 && slot[1] == 3 && slot[2] == 3) {
        return 30
    } else if (slot[0] == 4 && slot[1] == 4 && slot[2] == 4) {
        return 200
    } else {
        return 2
    }
}

function saldo(){
    const num = document.getElementById("num").value
    //const saldoPasado= Number(saldo.value)
    saldo.innerHtml+=num
}

function spin(){
  let slot=[grid(),grid(),grid()]
  let ganancia=ganancia(slot)
  saldo.innerHtml=Number(saldo.value)-1
  for(i=0;i<=2;i++){
      if (slot[i]===2) img[i].src="https://www.famousbirthdays.com/faces/milei-javier-image.jpg"
      if (slot[i]===3) img[i].src="https://i.blogs.es/553a2a/adam-smith-460_1371343c/450_1000.jpg"
      if (slot[i]===4) img[i].src="https://www.biografiasyvidas.com/biografia/f/fotos/friedman_milton_1.jpg"
  }
 if(ganancia===2){
     win.innerHTML="GANASTE $2!"
     saldo.innerHtml=Number(saldo.value)+2
 }
 if(ganancia===5){ 
     win.innerHTML="GANASTE $5!"
     saldo.innerHtml=Number(saldo.value)+5
    }
 if(ganancia===30) {
     win.innerHTML="GANASTE $30!"
     saldo.innerHtml=Number(saldo.value)+30
    }
 if(ganancia===200) {
     win.innerHTML="GANASTE $200!"
     saldo.innerHtml=Number(saldo.value)+200
    }
}

























//function MonteCarloSlot(n) {
//    let x = 0
//    let y = 0
//    let z = 0
//    let b = 0
//    let q = 0
//    let t = 0
//    for (let i = 1; i <= n; i++) {
//        let slot1 = [grid(), grid(), grid()]
//        x = ganancia(slot1) - 1 + x
//        if (ganancia(slot1) == 0) {
//            y = y + 1
//        } else if (ganancia(slot1) == 5) {
//            z = z + 1
//        } else if (ganancia(slot1) == 30) {
//            b = b + 1
//        } else if ((ganancia(slot1) == 200)) {
//            q = q + 1
//        } else {
//            t = t + 1
//        }
//    }
//    return console.log(y, z, b, q, t, x)
//}
//
//MonteCarloSlot(100000000)
//
//