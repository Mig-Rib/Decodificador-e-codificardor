
let vazio ='nenhum texto detectado'


function criptografar(){
    let texto = document.querySelector('textarea').value
    if(texto!==''){
        let criptografado = texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        
        let cript = document.getElementById('textoMudanca');
        cript.innerHTML = criptografado
        document.getElementById('fotoNoTexto').style.display ='none'
        document.getElementById('textoSumido').style.display ='none'
        
    }else{
        document.getElementById('fotoNoTexto').style.display ='block'
        document.getElementById('textoSumido').style.display ='block'
        let cript = document.getElementById('textoMudanca');
        cript.innerHTML = vazio
    }
    
}
function descriptografar(){
    let texto = document.querySelector('textarea').value
    if(texto!==''){
        let descriptografado = texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        
        let cript = document.getElementById('textoMudanca');
        cript.innerHTML = descriptografado
        document.getElementById('fotoNoTexto').style.display ='none'
        document.getElementById('textoSumido').style.display ='none'
        
    }else{
        document.getElementById('fotoNoTexto').style.display ='block'
        document.getElementById('textoSumido').style.display ='block'
        let cript = document.getElementById('textoMudanca');
        cript.innerHTML = vazio
    }
}