document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('hyperlinkColor').addEventListener('click', hyperlinkColor, false);
    document.getElementById('textColor').addEventListener('click', textColor, false);
    document.getElementById('headingColor').addEventListener('click', headingColor, false);
    document.getElementById('textString').addEventListener('click', textString, false);
    //more buttons here

    function hyperlinkColor() {
        var selectedColor = document.getElementById('hyperlinkColorSelect').value;
        chrome.tabs.query({currentWindow: true, active: true}, 
        function(tabs) {
            var currTab = tabs[0];
            chrome.tabs.sendMessage(currTab.id, {
                pack1: "hyperlinkColor",
                pack2: selectedColor
            });
        });
    }
    function textColor() {
        var selectedColor = document.getElementById('textColorSelect').value;
        chrome.tabs.query({currentWindow: true, active: true}, 
        function(tabs) {
            var currTab = tabs[0];
            chrome.tabs.sendMessage(currTab.id, {
                pack1: "textColor",
                pack2: selectedColor
            });
        });
    }
    function headingColor() {
        var selectedColor = document.getElementById('headingColorSelect').value;
        chrome.tabs.query({currentWindow: true, active: true}, 
        function(tabs) {
            var currTab = tabs[0];
            chrome.tabs.sendMessage(currTab.id, {
                pack1: "headingColor",
                pack2: selectedColor
            });
        });
    }
    function textString() {
        var selectedText = document.getElementById('textStringSelect').value;
        chrome.tabs.query({currentWindow: true, active: true}, 
        function(tabs) {
            var currTab = tabs[0];
            chrome.tabs.sendMessage(currTab.id, {
                pack1: "textString",
                pack2: selectedText
            });
        });
    }
    //more functions here

}, false);