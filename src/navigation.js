function reqListener () {
    document.write( this.response.name = "<font size=6> Гомель </font>");
    document.write( '<br><br>', parseInt(this.response.main.temp - 273) + ' С*' );
    if (this.response.weather[(0)].main == 'Mist')       document.write('<br><br><font size=4><span style="color:rgba(87,100,122,0.66)">Туманно<img src="http://openweathermap.org/img/w/50d.png"></span></font>');
    else if (this.response.weather[(0)].main == 'Clear') document.write('<br><br><font size=4><span style="color:rgb(0,218,255)">Чистое небо<img src="http://openweathermap.org/img/w/01d.png"></span></font>');
    else if (this.response.weather[(0)].main == 'Clouds')document.write('<br><br><font size=4><span style="color:rgb(124,188,182)">Облачн<img src="http://openweathermap.org/img/w/02d.png"></span></font>');
    else if (this.response.weather[(0)].main == 'Rain')  document.write('<br><br><font size=4><span style="color:rgb(84,88,135)">Дождь<img src="http://openweathermap.org/img/w/10d.png"></span></font>');
    else if (this.response.weather[(0)].main == 'Fog')   document.write('<br><br><font size=4><span style="color:rgba(96,122,136,0.4)">Сильный туман<img src="http://openweathermap.org/img/w/50d.png"></span></font>');
}
var weatheURL = 'https://api.openweathermap.org/data/2.5/weather?q=homyel&APPID=a8de50e25c5a720cf60c585bda8206d6';
var weathe = new XMLHttpRequest();
weathe.addEventListener("load", reqListener);
weathe.open('GET', weatheURL);
weathe.responseType = 'json';
weathe.send(null);
