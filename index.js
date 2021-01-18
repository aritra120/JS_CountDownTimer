let newyearday = new Date("Jan 1, 2022 0:0:0").getTime();
var x = setInterval(() => {
    var now = new Date().getTime();
    var distance = newyearday - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById('time').innerHTML =days + 'd' + ' ' + hours + 'h' + ' ' + minutes + 'm' + ' '+ seconds+ 's';

    if(distance<=0){
        clearInterval(x);
        document.getElementById('lock').innerHTML = 'May God Bring All The Happiness You want This Year';
        document.getElementById('lock').style.textAlign="center";
        document.getElementById('lock').style.marginTop="10px";
        document.getElementById('newlock').innerHTML = 'All The Best For The Upcoming Year';
        document.getElementById('newlock').style.textAlign="center";
        document.getElementById('mainsms').innerHTML = 'Congratulations, You Have Servived Another Year';
        document.getElementById('mainsms').style.textAlign="center";
        document.getElementById('bt').innerHTML="Start Again";
        document.getElementById('bt').style.marginLeft="455px";
        document.getElementById('mainnavbar').innerHTML = 'Happy New Year';
    }
}, 1000);