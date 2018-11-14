
function changeInfogomel () {
    document.getElementById('namsgomel').innerHTML = (this.response.name);
    document.getElementById('weatgomel').innerHTML = (this.response.weather[(0)].main);
    document.getElementById('tempgomel').innerHTML = (Math.round(this.response.main.temp - 273.15) + ' °C');
    if      (weatgomel.innerHTML == 'Mist')     (weatgomel.innerHTML = 'Туман');
    else if (weatgomel.innerHTML == 'Clear')    (weatgomel.innerHTML = 'Чистое небо');
    else if (weatgomel.innerHTML == 'Clouds')   (weatgomel.innerHTML = 'Облачно');
    else if (weatgomel.innerHTML == 'Rain')     (weatgomel.innerHTML = 'Дождь');
    else if (weatgomel.innerHTML == 'Fog')      (weatgomel.innerHTML = 'Сильный туман');
    else if (weatgomel.innerHTML == 'Snow')     (weatgomel.innerHTML = 'Снег');
    if      (namsgomel.innerHTML == 'Homyel')   (namsgomel.innerHTML = 'Гомель');
}

var url = 'https://api.openweathermap.org/data/2.5/weather?q=homyel&APPID=a8de50e25c5a720cf60c585bda8206d6';
var request = new XMLHttpRequest();
request.addEventListener("load", changeInfogomel);
request.open('GET', url, true);
request.responseType = 'json';
request.send('');
function changeInfominsk () {
    document.getElementById('namsminsk').innerHTML = (this.response.name);
    document.getElementById('weatminsk').innerHTML = (this.response.weather[(0)].main);
    document.getElementById('tempminsk').innerHTML = (Math.round(this.response.main.temp - 273.15) + ' °C');
    if      (weatminsk.innerHTML == 'Mist')     (weatminsk.innerHTML = 'Туман');
    else if (weatminsk.innerHTML == 'Clear')    (weatminsk.innerHTML = 'Чистое небо');
    else if (weatminsk.innerHTML == 'Clouds')   (weatminsk.innerHTML = 'Облачно');
    else if (weatminsk.innerHTML == 'Rain')     (weatminsk.innerHTML = 'Дождь');
    else if (weatminsk.innerHTML == 'Fog')      (weatminsk.innerHTML = 'Сильный туман');
    else if (weatminsk.innerHTML == 'Snow')     (weatminsk.innerHTML = 'Снег');
    if      (namsminsk.innerHTML == 'Minsk')    (namsminsk.innerHTML = 'Минск');
}

var url = 'https://api.openweathermap.org/data/2.5/weather?q=minsk&APPID=a8de50e25c5a720cf60c585bda8206d6';
var request = new XMLHttpRequest();
request.addEventListener("load", changeInfominsk);
request.open('GET', url, true);
request.responseType = 'json';
request.send('');
function changeInfovitebsk () {
    document.getElementById('namsvitebsk').innerHTML = (this.response.name);
    document.getElementById('weatvitebsk').innerHTML = (this.response.weather[(0)].main);
    document.getElementById('tempvitebsk').innerHTML = (Math.round(this.response.main.temp - 273.15) + ' °C');
    if      (weatvitebsk.innerHTML == 'Mist')     (weatvitebsk.innerHTML = 'Туман');
    else if (weatvitebsk.innerHTML == 'Clear')    (weatvitebsk.innerHTML = 'Чистое небо');
    else if (weatvitebsk.innerHTML == 'Clouds')   (weatvitebsk.innerHTML = 'Облачно');
    else if (weatvitebsk.innerHTML == 'Rain')     (weatvitebsk.innerHTML = 'Дождь');
    else if (weatvitebsk.innerHTML == 'Fog')      (weatvitebsk.innerHTML = 'Сильный туман');
    else if (weatvitebsk.innerHTML == 'Snow')     (weatvitebsk.innerHTML = 'Снег');
    if      (namsvitebsk.innerHTML == 'Vitebsk')    (namsvitebsk.innerHTML = 'Витебск');
}

var url = 'https://api.openweathermap.org/data/2.5/weather?q=vitebsk&APPID=a8de50e25c5a720cf60c585bda8206d6';
var request = new XMLHttpRequest();
request.addEventListener("load", changeInfovitebsk);
request.open('GET', url, true);
request.responseType = 'json';
request.send('');
function changeInfomogilev () {
    document.getElementById('namsmogilev').innerHTML = (this.response.name);
    document.getElementById('weatmogilev').innerHTML = (this.response.weather[(0)].main);
    document.getElementById('tempmogilev').innerHTML = (Math.round(this.response.main.temp - 273.15) + ' °C');
    if      (weatmogilev.innerHTML == 'Mist')     (weatmogilev.innerHTML = 'Туман');
    else if (weatmogilev.innerHTML == 'Clear')    (weatmogilev.innerHTML = 'Чистое небо');
    else if (weatmogilev.innerHTML == 'Clouds')   (weatmogilev.innerHTML = 'Облачно');
    else if (weatmogilev.innerHTML == 'Rain')     (weatmogilev.innerHTML = 'Дождь');
    else if (weatmogilev.innerHTML == 'Fog')      (weatmogilev.innerHTML = 'Сильный туман');
    else if (weatmogilev.innerHTML == 'Snow')     (weatmogilev.innerHTML = 'Снег');
    if      (namsmogilev.innerHTML == 'Mahilyow')    (namsmogilev.innerHTML = 'Могилев');
}

var url = 'https://api.openweathermap.org/data/2.5/weather?q=mahilyow&APPID=a8de50e25c5a720cf60c585bda8206d6';
var request = new XMLHttpRequest();
request.addEventListener("load", changeInfomogilev);
request.open('GET', url, true);
request.responseType = 'json';
request.send('');
function changeInfogrodno () {
    document.getElementById('namsgrodno').innerHTML = (this.response.name);
    document.getElementById('weatgrodno').innerHTML = (this.response.weather[(0)].main);
    document.getElementById('tempgrodno').innerHTML = (Math.round(this.response.main.temp - 273.15) + ' °C');
    if      (weatgrodno.innerHTML == 'Mist')     (weatgrodno.innerHTML = 'Туман');
    else if (weatgrodno.innerHTML == 'Clear')    (weatgrodno.innerHTML = 'Чистое небо');
    else if (weatgrodno.innerHTML == 'Clouds')   (weatgrodno.innerHTML = 'Облачно');
    else if (weatgrodno.innerHTML == 'Rain')     (weatgrodno.innerHTML = 'Дождь');
    else if (weatgrodno.innerHTML == 'Fog')      (weatgrodno.innerHTML = 'Сильный туман');
    else if (weatgrodno.innerHTML == 'Snow')     (weatgrodno.innerHTML = 'Снег');
    if      (namsgrodno.innerHTML == 'Hrodna')    (namsgrodno.innerHTML = 'Гродно');
}

var url = 'https://api.openweathermap.org/data/2.5/weather?q=hrodna&APPID=a8de50e25c5a720cf60c585bda8206d6';
var request = new XMLHttpRequest();
request.addEventListener("load", changeInfogrodno);
request.open('GET', url, true);
request.responseType = 'json';
request.send('');
function changeInfobrest () {
    document.getElementById('namsbrest').innerHTML = (this.response.name);
    document.getElementById('weatbrest').innerHTML = (this.response.weather[(0)].main);
    document.getElementById('tempbrest').innerHTML = (Math.round(this.response.main.temp - 273.15) + ' °C');
    if      (weatbrest.innerHTML == 'Mist')     (weatbrest.innerHTML = 'Туман');
    else if (weatbrest.innerHTML == 'Clear')    (weatbrest.innerHTML = 'Чистое небо');
    else if (weatbrest.innerHTML == 'Clouds')   (weatbrest.innerHTML = 'Облачно');
    else if (weatbrest.innerHTML == 'Rain')     (weatbrest.innerHTML = 'Дождь');
    else if (weatbrest.innerHTML == 'Fog')      (weatbrest.innerHTML = 'Сильный туман');
    else if (weatbrest.innerHTML == 'Snow')     (weatbrest.innerHTML = 'Снег');
    if      (namsbrest.innerHTML == 'Brest')    (namsbrest.innerHTML = 'Брест');
}

var url = 'https://api.openweathermap.org/data/2.5/weather?q=brest&APPID=a8de50e25c5a720cf60c585bda8206d6';
var request = new XMLHttpRequest();
request.addEventListener("load", changeInfobrest);
request.open('GET', url, true);
request.responseType = 'json';
request.send('');

