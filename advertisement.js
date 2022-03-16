window.onload = function(){
    var button = document.getElementsByName("sandbox")[0]
    var iframe = document.getElementsByName("framez")[0]
    button.addEventListener('click',sndbx,false);

    function sndbx(){
    var nibba = document.getElementById("framez").src;
    if(iframe.sandbox == 'allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation'){
    document.getElementById("framez").removeAttribute("sandbox"); 
    }
    frames['framez'].location.href=nibba;
    iframe.sandbox = 'allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation';
    }
} 
