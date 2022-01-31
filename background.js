chrome.action.onClicked.addListener((draftTab)=>{

    
    let tabUrl = new URL(draftTab.url);
    
    if(tabUrl.hostname==="hashnode.com" && tabUrl.pathname.includes('draft')){
        
        newTabUrl = tabUrl.href.replace('draft','preview');

        chrome.windows.create({
            url: newTabUrl 
          },(previewTab)=>{
              
            chrome.tabs.sendMessage(draftTab.id, {message: "previewTab",previewTabId:previewTab.tabs[0].id})
              
          });
    }


});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.joke === "Knock knock" && request.previewTabId)
      chrome.tabs.reload(
        request.previewTabId                    
        )
    }
  );
