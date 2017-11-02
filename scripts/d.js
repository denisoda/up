

var Google_Api_Key = 'AIzaSyDClvZpnI5xyB118el7chbFSHHlppmdg6E';


var apiUrl = "https://searchconsole.googleapis.com/v1/urlTestingTools/mobileFriendlyTest:run?key=" + Google_Api_Key;
fetch(apiUrl,{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: '{"url": "' + "https://www.upwork.com" + '"}'}).then(response)
{
    console.log(response.text)
}