// Your Google API https://developers.google.com/maps/documentation/javascript/get-api-key
var Google_Api_Key = 'AIzaSyDClvZpnI5xyB118el7chbFSHHlppmdg6E'
 
function PageSpeed_Insights () {
    var inputUrl = document.getElementById("URL_speed").value;
    
    if (!inputUrl || !inputUrl.length) {
        document.getElementById("Result").innerHTML = "Input the site's URL!";
        return;
    }

    var gooleApiUrl = 'https://www.googleapis.com/pagespeedonline/v2/runPagespeed?url=' + inputUrl + '&strategy=mobile&key=' + Google_Api_Key;
    var redirectUrl = 'http://webbuilder.design/urls?=' + inputUrl;
        
    fetch(gooleApiUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'no-cors',
    }).then(function(response) {
        var data = response.data,
            result = document.getElementById("Result");
        
        result.innerHTML = 'Information about "' + data.title + '" page';
        result.innerHTML += "<br> You're site speed is " + data.ruleGroups.SPEED.score + ' from 100';
        result.innerHTML += ("<br>" + "You're site is mobile friendly");
        
        fetch(redirectUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            mode: 'no-cors',
        }).then(function(response) {
            console.log(response);
        }, function(error) {
            console.log(error.message);
        });
    }, function(error) {
        document.getElementById("Result").innerHTML = "You've put incorrect URL or the site doesn't exist, please put URL in the order 'https://example.com' :)";
    });   
}
