chrome.tabs.query({
  currentWindow: true,
  active: true
}, function(tabs){
  chrome.tabs.sendMessage(tabs[0].id,
    {from: 'popup',
     subject: 'getData'}, 
     insertData);
});


function insertData(data){
    document.getElementById('price').innerText = data.info.join('\n');
  };

  function selectInfo(){
    var node = document.getElementById("price");
    
    
    var range = document.createRange();
    range.selectNodeContents(node);
    
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);

   
    document.execCommand('copy');
}

document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('button').onclick = selectInfo;
});
