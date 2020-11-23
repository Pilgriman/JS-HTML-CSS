
function carregar(){
var msg=window.document.getElementById('msg')
var img=window.document.getElementById('imagem')
var data=new Date()
//var hora =data.getHours()
var hora=7
msg.innerText=`Agora são ${hora} horas`
if (hora >= 5 && hora < 12 ) {
    img.src='img/manha.png'
    document.body.style.background='#f8eebe'

}else if( hora > 12 && hora <= 18 ){

    img.src='img/tarde.png'
    document.body.style.background='#b57619'
}else if(hora > 19 && hora < 24){
    img.src='img/noite.png'
    document.body.style.background='#5c5642'
}else{
    console.log('Boa Madrugada')
}


}