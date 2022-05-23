

function clicar(){
    
    var num = document.getElementById('txtn') //numero digitado pelo usuario
    var r = document.getElementById('seltab')
    if( num.value.length == 0){
        alert('Por favor, digite um numero')        
    }else{
        var n = Number(num.value)  
        var t = 1 // tabuada
        r.innerHTML = ' '
        while( t <= 10){
            var item = document.createElement('option')
            item.text = `${n} X ${t} = ${n*t}`
            r.value = `tab${t}`
            r.appendChild(item)
            t++
        }
        num.value =''
        num.focus()
    }
    
}
r.innerHTML =`${n} X ${t} = ${n*t}` 


