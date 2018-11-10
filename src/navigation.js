function reqListener () {
    document.write( this.response.name = "Гомель" );
    document.write('<br><br>', parseInt(this.response.main.temp - 273) + " С*" );
    if (this.response.weather[(0)].main == 'Mist')  document.write('Туманно<img src="http://openweathermap.org/img/w/50d.png">');
    if (this.response.weather[(0)].main == 'Clear') document.write('Чистое небо<img src="http://openweathermap.org/img/w/01d.png">');
    if (this.response.weather[(0)].main == 'Clouds')document.write('Облачн<img src="http://openweathermap.org/img/w/02d.png">');
    if (this.response.weather[(0)].main == 'Rain')  document.write('Дождь<img src="http://openweathermap.org/img/w/10d.png">');
    if (this.response.weather[(0)].main == 'Fog')   document.write('Сильный туман<img src="http://openweathermap.org/img/w/50d.png">');
}
var weatheURL = 'https://api.openweathermap.org/data/2.5/weather?q=homyel&APPID=a8de50e25c5a720cf60c585bda8206d6';
var weathe = new XMLHttpRequest();
weathe.addEventListener("load", reqListener);
weathe.open('GET', weatheURL);
weathe.responseType = 'json';
weathe.send();
