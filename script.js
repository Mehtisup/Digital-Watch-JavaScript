function wFunction() {
    const myWatch = new Date();
    var h = myWatch.getHours(h);
    var m = myWatch.getMinutes(m);
    var s = myWatch.getSeconds(s);
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("watch").innerHTML = h + ":" + m + ":" + s;
    setTimeout(wFunction, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i}
    return i;
}

wFunction()
