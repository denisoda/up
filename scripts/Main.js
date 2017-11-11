


//Your Google API https://developers.google.com/maps/documentation/javascript/get-api-key

var Google_Api_Key = 'AIzaSyDClvZpnI5xyB118el7chbFSHHlppmdg6E';

function loader(bool) {

    var loader = document.getElementById("loader");

    if(bool){
        loader.style.display = "block";
    }
    else loader.style.display = "none";
}


function PageSpeed_Insights () {
    var url = 'http://webbuilder.design/urls?=' + inp_url;
    var inp_url = document.getElementById("URL_speed");

    // (SAVE URL) sending URL to the server
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'no-cors',
    }).then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error.message);
    });

    if (inp_url.value.length == 0 || !ValidUrl_Regrex(inp_url.value)) {
        document.getElementById("Result").innerHTML = err_msg("url_err");
    }
    else {
        httpPOST(Url_Fix(inp_url));
    }

    var result = document.getElementById("Result");

    if (inp_url.value.length == 0 || !ValidUrl_Regrex(inp_url.value)) {
        document.getElementById("Result").innerHTML = err_msg("url_err");
    }
    else {
        try {
            loader(true);
            console.log(Url_Fix(inp_url));
            data = JSON.parse(httpGET(Url_Fix(inp_url)));
          //  mobiledata = JSON.parse((readyCallback(httpPOST(inp_url))));



            if (data.ruleGroups.SPEED.score == "Cannot read property 'SPEED' of undefined"){
                document.getElementById("Result").innerHTML = err_msg("request_err")
            }
                else {
                    result.innerHTML = 'Information about "' + data.title + '" page';
                    result.innerHTML += "<br> Your site speed is " + data.ruleGroups.SPEED.score + ' from 100';

                }
        }

       catch(err){
            loader(false);
        document.getElementById("Result").innerHTML = "You've entered incorrect URL or the site doesn't exist, please put URL in the order 'https://example.com' :)";
        }
    }
}

function err_msg(type) {
    switch (type) {
        case  ("request_err"):
        return "We haven't got an answer from the server";
            break;
        case ("url_err"):
        return "You've entered incorrect URL";
    }
    }




function ValidUrl_Regrex(str) {
    var expression = /(www\.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)|[Hh]ttps?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
    var regex = new RegExp(expression);

    if (str.match(regex)) {
        return true;
    } else {
        return false
    }
}

function Url_Fix(URL) {
    var expression = /[HhTtTtPpSs]/;
    var regex = new RegExp(expression);

    if (URL.value.toString().match((regex)))
    {
        URL.value.substring(0,5).replace("https");
    }

    if (URL.value.indexOf("www."))
    {

    }
    if(!URL.value.indexOf("www."))
    {
        URL.value.toString().replace('www.', "");
        URL.value = "https://" + URL.value;
    }
    return URL.value.toString()
}


//parse of this data https://developers.google.com/apis-explorer/#p/pagespeedonline/v2/pagespeedonline.pagespeedapi.runpagespeed

function JsonParse(file) {
        var file = JSON.parse(file);
        return JSON.parse(file);
    }

//Api Google
function httpGET(Url)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", 'https://www.googleapis.com/pagespeedonline/v2/runPagespeed?url=' + Url + '&strategy=mobile&key=' + Google_Api_Key, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function httpPOST(URL) {
    url = "https://searchconsole.googleapis.com/v1/urlTestingTools/mobileFriendlyTest:run?key=" + Google_Api_Key;
    var result = document.getElementById("Result");
    fetch(url, {
        method: 'post',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({url:URL})
    }).then().then().then().then().then().then().then().then().then().then().then(function (response) {
            if (response.ok) {
                return response.json();
            }
        }).then(function (test) {

        loader(false);

        switch (test.mobileFriendliness) {
            case "MOBILE_FRIENDLY":
                result.innerHTML += ("<br>" + "Your site is mobile friendly!" );
                break;
                case "NOT_MOBILE_FRIENDLY":
                    result.innerHTML += ("<br>" + "Your site isn't mobile friendly!" );
                    break;
            default : result.innerHTML += ("<br>" + "Our servers are busy try one time more!" );
        }
    })};












