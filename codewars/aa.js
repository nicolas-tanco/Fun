let concesionaria = {
    autos: [{
        marca: "Ford",
        modelo:"Fiesta",
        precio:150000,
        km: 200,
        color: "Azul",
        cuotas: 12,
        anio: 2019,
        patente: "APL123",
        vendido: false,
    }, {   marca: "Toyota",
        modelo:"Corolla",
        precio:100000,
        km: 0,
        color: "Blanco",
        cuotas: 14,
        anio: 2019,
        patente: "JJK116",
        vendido: false,
    
    }],
    buscarAuto: function(patente) {
        for(i=0;i<this.autos.length;i++){
            if(patente===this.autos[i].patente){
                return this.autos[i]
            }
        }
    },
    venderAuto: function(patente) {
        auto = this.buscarAuto(patente)
        console.log(auto);
        auto.vendido = true
        console.log(this.autos);
    },
    autosParaLaVenta: function() {
        let autosVenta = []
        for(i=0;i<this.autos.length;i++){
            let auto = this.autos[i]
            if(auto.vendido === false) {
                autosVenta.push(auto)
            }
        }
        return autosVenta
    },
    autosNuevos: function() {
        let nuevos = []
        let aNuevo = this.autosParaLaVenta()
        for(i=0;i<aNuevo.length;i++){
            if(aNuevo[i].km < 100){
                nuevos.push(aNuevo[i])
            }
        }
        return nuevos
    },
    listaDeVentas:function() {
        let venta = []
        for(i=0;i<this.autos.length;i++){
            let auto = this.autos[i]
            if(auto.vendido===true){
                venta.push(auto.precio)
            }
        }
        return venta
    },
    totalDeVentas:function() {
        let ventas = 0
        let lista = this.listaDeVentas()
        for(i=0;i<lista.length;i++){
            ventas += lista[i]
        }
        return ventas
    },
    puedeComprar:function(auto,persona) {
        let capacidadCuota = (auto.precio/auto.cuotas)
        let capacidadCuotaPersona = persona.capacidadDePagoEnCuotas
        let capacidadPagoPersona = persona.capacidadDePagoTotal
        let precioAuto = auto.precio
        if (capacidadCuotaPersona >= capacidadCuota && capacidadPagoPersona >= precioAuto) {
            return true
        } else{
            return false
        }
    }}

concesionaria.venderAuto("JJK116")

console.log(concesionaria.autos);
console.log();
