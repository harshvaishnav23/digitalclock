let cl = console.log;

const digitalClock = document.getElementById("digitalClock");

function setZero(num){
    if(num < 10){
        return '0' + num
    }else{
        return num
    }
}

function CreatedigitalClock(){
    
    let d = new Date;
    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let session = "PM";

    if(hr > 12){
        session = "PM"
        hr = hr - 12;
    }
    
    // if(hr < 10){
    //     hr = '0' + hr;
    // }else{
    //     hr = hr;
    // }
    // (hr < 10) ? (hr = '0' + hr) : (hr = hr);
    hr = setZero(hr)
    // if(min < 10){
    //     min = '0' + min;
    // }
    // (min < 10) ? (min = '0' + min) : (min = min);
    min = setZero(min)
    // if(sec < 10){
    //     sec = '0' + sec;
    // }
    // (sec < 10) ? (sec = '0' + sec) : (sec = sec);
    sec = setZero(sec)


    let res = `${hr} : ${min} : ${sec} ${session}`;
    
    digitalClock.innerHTML = res;
    setTimeout(CreatedigitalClock, 1000)
}

CreatedigitalClock();