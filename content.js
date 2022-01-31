let typingTimer;                
let doneTypingInterval = 2000;  
let myInput = document.querySelectorAll('textarea')[1];

myInput.addEventListener('input', () => {
    clearTimeout(typingTimer);
    if (myInput.value) {
        typingTimer = setTimeout(doneTyping, doneTypingInterval);
    }
});

function doneTyping () {

    chrome.runtime.sendMessage({joke: "Knock knock",previewTabId:window.previewTabId})


}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.message === "previewTab"){
          window.previewTabId = request.previewTabId;
      }
    }
);