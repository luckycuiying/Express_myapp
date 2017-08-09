

$(function(){
    $('#localStorageSet').click(function(event) {
        localStorage.setItem('name','lisi');
    });
    $('#localStorageGet').click(function(event) {
        var get = localStorage.getItem('name');
        alert(get);
    });
    $('#localStorageRemove').click(function(event) {
        localStorage.removeItem('name');
    });
    $('#localStorageClear').click(function(event) {
        localStorage.clear();
    });
    $('#cookieGet').click(function(event) {
        var name = docCookies.getItem('name');
        console.log(name);
    });
})