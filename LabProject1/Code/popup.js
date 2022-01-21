document.addEventListener('DOMContentLoaded', function() {
    var hyperlinkColour = document.getElementById('hyperlinkColour');
    hyperinkColour.addEventListener('change', function() {
        var hyperlinkColourSelect = document.getElementById('hyperlinkColourSelect')
        
        chrome.tabs.getSelected(null, function(tab) {
            var listOfElements = document.getElementsByTagName("a");

            for (i = 0; i < listOfElements.length; i++) {
                listOfElements[i].style.color = hyperlinkColourSelect.value;
            }

        });
    }, false);
}, false);