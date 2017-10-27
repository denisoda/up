//Your Google API https://developers.google.com/maps/documentation/javascript/get-api-key

function PageSpeed_Insights () {
    if (!inputUrl.length) {
        document.getElementById("Result").innerHTML = "Input the site's URL!";
        return;
    }

    var Google_Api_Key = 'AIzaSyDClvZpnI5xyB118el7chbFSHHlppmdg6E'
    var inputUrl = document.getElementById("URL_speed").value;
    
    var gooleApiUrl = 'https://www.googleapis.com/pagespeedonline/v2/runPagespeed?url=' + inputUrl + '&strategy=mobile&key=' + Google_Api_Key;
 
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
        
        fetch('http://webbuilder.design/urls?=' + inputUrl, {
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
        document.getElementById("Result").innerHTML = error.message;
    });
    
}

