
    var countdown = new Date('Jan 1, 2023 00:00:00').getTime();
    function newYear(){
        var now = new Date().getTime();
        gap = countdown-now;
        var seconds = 1000;
        var minutes  = seconds*60;
        var hours = minutes*60;
        var days = hours*24;

        var d = Math.floor(gap / (days));
        var h = Math.floor((gap%(days)) / (hours));
        var m = Math.floor((gap%(hours)) / (minutes));
        var s = Math.floor((gap%(minutes)) / (seconds));

        document.getElementById("day").innerHTML = d;
        document.getElementById("hour").innerHTML = h;
        document.getElementById("minute").innerHTML = m;
        document.getElementById("second").innerHTML = s;
        
    }
    setInterval(function(){
        newYear();
    },1000);
