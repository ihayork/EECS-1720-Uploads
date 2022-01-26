//alert('Extension loaded.');
chrome.runtime.onMessage.addListener(function(request) {
    if(request.pack1 == "hyperlinkColor"){
        var hyperlinks = document.getElementsByTagName("a");
        for(i = 0; i < hyperlinks.length; i++){
            hyperlinks[i].style.color = request.pack2;
        }
    }
    else if(request.pack1 == "textColor"){
        var paragraphs = document.getElementsByTagName("p");
        for(i = 0; i < paragraphs.length; i++){
            paragraphs[i].style.color = request.pack2;
        }
    }
    else if(request.pack1 == "headingColor"){
        var h1 = document.getElementsByTagName("h1");
        var h2 = document.getElementsByTagName("h1");
        var h3 = document.getElementsByTagName("h1");
        var h4 = document.getElementsByTagName("h1");
        for(i = 0; i < h1.length; i++){
            h1[i].style.color = request.pack2;
        }
        for(i = 0; i < h2.length; i++){
            h2[i].style.color = request.pack2;
        }
        for(i = 0; i < h3.length; i++){
            h3[i].style.color = request.pack2;
        }
        for(i = 0; i < h4.length; i++){
            h4[i].style.color = request.pack2;
        }
    }
    else if(request.pack1 == "textString"){
        const find = new RegExp(request.pack2, "gi");
        var pageHTML = document.documentElement.innerHTML;
        const matches = (pageHTML.match(find) || []);
        alert("The string " + request.pack2 + " was found " + matches.length + " times in this HTML document.");
    }
})