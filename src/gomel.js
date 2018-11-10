var a = ('<style>\n' +
    '   body {\n' +
    '    background: url(https://media3.giphy.com/media/VxbvpfaTTo3le/giphy.gif) repeat;\n' +
    '    -moz-background-size: 100%; \n' +
    '    -webkit-background-size: 100%; \n' +
    '    -o-background-size: 100%; \n' +
    '    background-size: 100%; \n' +
    '   }\n' +
    '  </style>');


function reqListener () {
    document.write(a);
    document.write(this.response.name = "<center><b><font size=7 face='Calibri'> Гомель </font></b>");
    document.write('<br><br><b><font size=5 face=\'Calibri\'>',parseInt(this.response.main.temp - 273) + ' °C','</font></b>');
    if (this.response.weather[(0)].main == 'Mist')       document.write('<br><br><b><font size=6 face=\'Calibri\'><span style="color:rgba(125,126,134,0.66)">Туманно</span></font></b>');
    else if (this.response.weather[(0)].main == 'Clear') document.write('<br><br><b><font size=6 face=\'Calibri\'><span style="color:rgb(0,218,255)">Чистое небо</span></font></b>');
    else if (this.response.weather[(0)].main == 'Clouds')document.write('<br><br><b><font size=6 face=\'Calibri\'><span style="color:rgb(124,188,182)">Облачно</span></font></b>');
    else if (this.response.weather[(0)].main == 'Rain')  document.write('<br><br><b><font size=6 face=\'Calibri\'><span style="color:rgb(84,88,135)">Дождь</span></font></b>');
    else if (this.response.weather[(0)].main == 'Fog')   document.write('<br><br><b><font size=6 face=\'Calibri\'><span style="color:rgba(41,41,41,0.54)">Сильный туман</span></font></center></b>');
}
var weatheURL = 'https://api.openweathermap.org/data/2.5/weather?q=homyel&APPID=a8de50e25c5a720cf60c585bda8206d6';
var weathe = new XMLHttpRequest();
weathe.addEventListener("load", reqListener);
weathe.open('GET', weatheURL, true);
weathe.responseType = 'json';
weathe.send('');
