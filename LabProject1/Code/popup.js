document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('hyperlinkColor').addEventListener('click', hyperlinkColor, false);
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
    //more functions here

}, false);