window.addEventListener('load', function(){
    var cb = document.getElementById('clipboard');
    cb.focus();
    cb.addEventListener('paste', function(){
        cb.value=event.clipboardData.getData('text/html');
    }, false);
    document.execCommand('paste');
}, false);