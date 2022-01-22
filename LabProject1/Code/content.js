//alert('Extension loaded.');
chrome.runtime.onMessage.addListener(function(request) {
    if(request.pack1 == "hyperlinkColor"){
        var hyperlinks = document.getElementsByTagName("a");
        for(i = 0; i < hyperlinks.length; i++){
            hyperlinks[i].style.color = request.pack2;
        }
    }
    
    //const re = new RegExp('a', "gi");
    //const matches = document.documentElement.innerHTML.match(re);
    //alert("the string a was found " + matches.length + " times on this page.");
})