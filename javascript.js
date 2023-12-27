function clock() {
    let datetime = new Date();
    let hrs = datetime.getHours();
    let min = datetime.getMinutes();
    let sec = datetime.getSeconds();
    let session = document.getElementById('sessions');

    if (hrs>= 12) {
        session.innerHTML = 'PM'
    }else{
        session.innerHTML = 'AM'

    }
    if (hrs>12) {
        hrs = hrs - 12
    }
    if (hrs<10) {
        hrs = "0" + hrs
    }
    if (sec<10) {
        sec = "0" + sec
    }
  
    if(min<10){
        min = "0" + min
    }

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(clock, 10);