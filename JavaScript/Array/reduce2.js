Array.prototype.reduce2 = function(callback){
    let acumulador = this[0]
    for (let i=1; i<this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

