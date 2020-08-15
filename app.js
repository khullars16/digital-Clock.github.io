

var today, hours, minutes, seconds, todayDate, todayDay, todayYear, todayMonth;
var time = document.getElementById("time");
var date = document.getElementById("date");
var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function fun()
{    
  

reloadingDate();


    time.innerHTML = hours + " : " + minutes + " : " + seconds;
    date.innerHTML = todayDate + " " + todayMonth + " " + todayYear;

    
    check(today)
    


       
    var reload = setTimeout(fun, 500);
}

function reloadingDate() {
    
    today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();
    seconds = today.getSeconds();
    todayDate = today.getDate();
    todayDay = days[today.getDay()];
    todayYear = today.getFullYear();
    todayMonth = month[today.getMonth()];

    hours = check(hours)
    minutes = check(minutes);
    seconds = check(seconds);
    todayDate = check(todayDate);
    todayYear = check(todayYear);
    todayMonth = check(todayMonth);
}

function check(i) {
    if(i < 10) {
        i = "0" + i;
        return i;
    }
    else{
        return i;
    }
}

