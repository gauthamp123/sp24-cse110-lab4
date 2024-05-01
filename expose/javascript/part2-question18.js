var d = new Date();
var time = d.toLocaleTimeString();
var prevTime = 0;

prevDate = time;
while (true){
    if (prevTime != time){
        console.log(time);
    }
    prevTime = time;
    d = new Date();
    time = d.toLocaleTimeString();

}
