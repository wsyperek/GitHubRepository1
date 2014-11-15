var d = (new Date);
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();
var zeit = h + ":" + m + ":" + s;

// Version 0.0.1

function Person(name, vorname, alter) {
    
}




var counterButtonOnClick = function () {
    var button = document.getElementsByName("counterButton")[0];
    var jetzt = new Date();
    jetzt = jetzt.getTime();
    var seitStartVerstrichen = jetzt - d.getTime();
    var seitStartVerstrichenInSekunden = TS.GetSecondsFromMiliseconds(seitStartVerstrichen);
    var myTS1 = TS;
    var myTS2 = TS;
    myTS1.Name = "Frank";
    myTS2.Name = "Paul";
    button.textContent = seitStartVerstrichenInSekunden;

};

var TS = {
    Name:"Peter",
    GetSecondsFromMiliseconds: function (miliseconds) {
        var n = TS.Name;
        return miliseconds / 1000;
    },

}



