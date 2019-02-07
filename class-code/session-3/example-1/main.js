function getJSON(path, callback) {
    var req = new XMLHttpRequest();
    req.responseType = 'json';
    req.open('GET', path, true);
    req.onload = function() {
        callback(req.response);
    };
    req.send();
}