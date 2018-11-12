var a = ('<style>\n' +
    '   body {\n' +
    '    background: url(https://i.gifer.com/68J.gif) repeat;\n' +
    '    -moz-background-size: 100%; \n' +
    '    -webkit-background-size: 100%; \n' +
    '    -o-background-size: 100%; \n' +
    '    background-size: 100%; \n' +
    '   }\n' +
    '  </style>');


function reqListener () {
    document.write(a,'<font face=\'Calibri\'><center><b>');
    document.write(this.response.name = "<font size=7 >Витебск</font>");
    document.write('<br><br><font size=5 >',parseInt(this.response.main.temp - 273) + ' °C');
    if      (this.response.weather[(0)].main == 'Mist')  document.write('<br><br><font size=6 ><span style="color:rgba(125,126,134,0.66)">Туманно</span>');
    else if (this.response.weather[(0)].main == 'Clear') document.write('<br><br><font size=6 ><span style="color:rgb(0,218,255)">Чистое небо</span>');
    else if (this.response.weather[(0)].main == 'Clouds')document.write('<br><br><font size=6 ><span style="color:rgb(124,188,182)">Облачно</span>');
    else if (this.response.weather[(0)].main == 'Rain')  document.write('<br><br><font size=6 ><span style="color:rgb(84,88,135)">Дождь</span>');
    else if (this.response.weather[(0)].main == 'Fog')   document.write('<br><br><font size=6 ><span style="color:rgba(41,41,41,0.54)">Сильный туман</span></font></center></b>');
}
var weatheURL = 'https://api.openweathermap.org/data/2.5/weather?q=vitsyebsk&APPID=a8de50e25c5a720cf60c585bda8206d6';
var weathe = new XMLHttpRequest();
weathe.addEventListener("load", reqListener);
weathe.open('GET', weatheURL, true);
weathe.responseType = 'json';
weathe.send('');
