function reqListener () {
    document.write( this.response.name = "Гомель" );
    document.write('<br><br>', parseInt(this.response.main.temp - 273) + " С*" );
    if (this.response.weather[(0)].main == 'Mist')  document.write('Туманно');
    if (this.response.weather[(0)].main == 'Clear') document.write('Чистое небо');
    if (this.response.weather[(0)].main == 'Clouds')document.write('Облачн');
    if (this.response.weather[(0)].main == 'Rain')  document.write('Дождь');
    if (this.response.weather[(0)].main == 'Fog')   document.write('Сильный туман');
}
var weatheURL = 'https://api.openweathermap.org/data/2.5/weather?q=homyel&APPID=a8de50e25c5a720cf60c585bda8206d6';
var weathe = new XMLHttpRequest();
weathe.addEventListener("load", reqListener);
weathe.open('GET', weatheURL);
weathe.responseType = 'json';
weathe.send();
