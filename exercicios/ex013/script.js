function aumento(){
    let msg = document.getElementById('mensagem')
    let sal = Number(document.getElementById('salario').value)
    let aum = sal + sal/100 * 15
    msg.innerHTML = `Um funcionário que ganhava R$${sal}, com 15% de aumento, passa a receber R$${aum.toFixed(2)}`
}