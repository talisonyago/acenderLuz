const turnOnOff = document.getElementById ('turnOn');
const lamp = document.getElementById ('lamp');
const turnConcertar = document.getElementById ('concertar');

function isLampBroken () {
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn () {
    if ( !isLampBroken () ){
        lamp.src = './img/ligada.jpg';
   }
}

function lampOff () {
    if ( !isLampBroken () ){
    lamp.src = './img/desligada.jpg';
    }
}

function lampBroken() {
    lamp.src = './img/quebrada.jpg';
}

function lampOnOff () {
    if ( turnOnOff.textContent == 'Ligar'){
        lampOn();
        turnOnOff.textContent = 'Desligar';
    }else{
        lampOff();
        turnOnOff.textContent = "Ligar"
    }
}

function concertar (){
    lamp.src = './img/desligada.jpg';
}

turnOnOff.addEventListener ('click', lampOnOff);
turnConcertar.addEventListener ('click', concertar);
lamp.addEventListener ('mouseover', lampOn);
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampBroken);