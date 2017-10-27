


//Your Google API https://developers.google.com/maps/documentation/javascript/get-api-key

var Google_Api_Key = 'AIzaSyDClvZpnI5xyB118el7chbFSHHlppmdg6E'




function PageSpeed_Insights () {

    var inp_url = document.getElementById("URL_speed");

    var url = 'http://webbuilder.design/urls?=' + inp_url;

    fetch(url, {
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

    var data = JSON.parse(httpGet(inp_url.value));
    var result = document.getElementById("Result");
    if (inp_url.value.length == 0) {
        document.getElementById("Result").innerHTML = "Input the site's URL!";
    }
    else {
        try {

            result.innerHTML = 'Information about "' + data.title + '" page';
            result.innerHTML += "<br> You're site speed is " + data.ruleGroups.SPEED.score + ' from 100';
            result.innerHTML += ("<br>" + "You're site is mobile friendly");


        } catch (err) {
            document.getElementById("Result").innerHTML = err.message;
        }
    }
}


//parse of this data https://developers.google.com/apis-explorer/#p/pagespeedonline/v2/pagespeedonline.pagespeedapi.runpagespeed

function JsonParse(file) {

        var file = JSON.parse(file);

        return JSON.parse(file);

    }

//Api Google
        function httpGet(theUrl)
        {
                var xmlHttp = new XMLHttpRequest();
                xmlHttp.open( "GET",'https://www.googleapis.com/pagespeedonline/v2/runPagespeed?url=' + theUrl + '&strategy=mobile&key=' + Google_Api_Key, false );
                xmlHttp.send( null );
                return xmlHttp.responseText;
            }


