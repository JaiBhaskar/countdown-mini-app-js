const endDate=new Date("3 July, 2025 00:05:00").getTime();
const startDate=new Date().getTime();

//setInterval(function,delay in milliseconds)
let x=setInterval(function updateTimer(){
    const now=new Date().getTime();

    const distanceCovered=now-startDate;
    const distancePending=endDate-now;
    
    //calculate days,hrs,mins,secs
    //1day=24*60*60*1000 ms
    const oneDayInMillis=(24*60*60*1000);
    const oneHourInMillis=(60*60*1000);
    const oneMinInMillis=(60*1000);
    const oneSecInMillis=(1000);
    const days=Math.floor((distancePending)/(oneDayInMillis));
    const hrs=Math.floor((distancePending%(oneDayInMillis))/(oneHourInMillis));
    const mins=Math.floor((distancePending%(oneHourInMillis))/(oneMinInMillis));
    const secs=Math.floor((distancePending%(oneMinInMillis))/(oneSecInMillis));
    const millisecs=Math.floor((distancePending)%(oneSecInMillis));

    document.getElementById("days").innerHTML=days;
    document.getElementById("hours").innerHTML=hrs;
    document.getElementById("minutes").innerHTML=mins;
    document.getElementById("seconds").innerHTML=secs;

    //calculate width percentage for progress bar
    const totalDistance=endDate-startDate;

    const percentageDistance=(distanceCovered/totalDistance)*100;

    //calculate width for progress bar
    document.getElementById("progress-bar").style.width=percentageDistance+"%";

    if(distancePending<=0){
        clearInterval(x);
        document.getElementById("countdown").innerHTML="EXPIRED";
        document.getElementById("progress-bar").style.width="100%";

    }
},1000);