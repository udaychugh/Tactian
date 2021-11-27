var mystring;
let total;
window.addEventListener('load', function () {
    //var mystring;
    chrome.tabs.query({
        active: true,
        lastFocusedWindow: true
    }, tabs => {
        let url = tabs[0].url;
        // use `url` here inside the callback because it's asynchronous!
        console.log(url);
        mystring = url;
        api_url = "https://ipqualityscore.com/api/json/url/MrvuJsju6g8tbjNnrI1al9zRcjS86cR2/";
        var newmystring = mystring.replace('https://', '');
        var newmystring2 = newmystring.substring(0, newmystring.indexOf('/'));
        total = api_url + newmystring2;
        console.log(total);
        Apicalling();

        if (mystring.includes("https") == 0) {
            document.getElementById("secure").innerHTML = "Connection is not Secure";
            document.getElementById("secureImage").src = "warning.gif";
            document.getElementById("secure").style.color = "red";
        }

    });


});

//var newtotal = document.getElementsByClassName("newhost").value;
function Apicalling() {
    var p, s, rr;
    fetch(total)
        .then(function (response) {
            return response.json();
        })
        .then(function (myJson) {
            console.log(JSON.stringify(myJson));
            const finalValue = JSON.stringify(myJson, undefined, 2);
            p = finalValue.message;
            p = finalValue.spamming;
            p = finalValue.risk_score;
            document.getElementById("host").innerHTML = finalValue;
            //document.getElementById("phishing").innerHTML = finalValue.p;
            //document.getElementById("spamming").innerHTML = finalValue.s;
            //document.getElementById("riskRate").innerHTML = finalValue.rr;


            






        });
}
