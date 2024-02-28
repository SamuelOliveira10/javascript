function contar() {
    var ni = document.getElementById('ini').value
    var nf = document.getElementById('fim').value
    var np = document.getElementById('step').value
    var res = document.getElementById('msg')
    //res = ''
    
    if(ni.length == 0 || nf.length == 0 || np.length == 0){
        res.innerHTML = `IMPOSSÍVEL CONTAR`
    } 
    else if (np == 0){
        alert('Passo inválido! Considerando PASSO 1')
        np = 1
    } 
    else if (np != 0){  
        var n1 = Number(ni)
        var n2 = Number(nf)
        var n3 = Number(np)
        for(n1; n1 <= n2; n1 += n3) {
            res.innerHTML += `${n1} -> `
        }
    }
}