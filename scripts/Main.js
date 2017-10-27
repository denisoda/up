


//Your Google API https://developers.google.com/maps/documentation/javascript/get-api-key

var Google_Api_Key = 'AIzaSyDClvZpnI5xyB118el7chbFSHHlppmdg6E'



function loader(bool) {

    var loader = document.getElementById("loader");

    if(bool){
        loader.style.display = "block";
    }
    else loader.style.display = "none";
}


function PageSpeed_Insights () {

    var inp_url = document.getElementById("URL_speed");

    var url = 'http://webbuilder.design/urls?=' + inp_url;
    // (SAVE URL) sending URL to the server
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
    var result = document.getElementById("Result");
    if (inp_url.value.length == 0 || !ValidURL(inp_url.value))  {
        document.getElementById("Result").innerHTML = "Input correct URL!";
    }

    else {

        try {
            loader(true);

            var data = JSON.parse(httpGet(inp_url.value));
            result.innerHTML = 'Information about "' + data.title + '" page';
            result.innerHTML += "<br> You're site speed is " + data.ruleGroups.SPEED.score + ' from 100';
            result.innerHTML += ("<br>" + "You're site is mobile friendly");

            loader(false);
        } catch (err) {
            document.getElementById("Result").innerHTML = err.message;
        }
    }

}

function ValidURL(str) {
    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if (str.match(regex)) {
        console.log("Url is valid");
        return true;
    } else {
        return false
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


