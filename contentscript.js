chrome.runtime.sendMessage(
	{from: "content",
	 subject: "showPageAction"
});


chrome.runtime.onMessage.addListener(function(message, sender, response){
	if(message.from === "popup" && message.subject ==="getData"){
		var jsonResponse = {
			info: pricesAndSellers
		};
		response(jsonResponse);
	};
});

//Get Info
var pricesAndSellers = (function(){
	var sellersSection = document.getElementsByClassName('a-row a-spacing-mini olpOffer');
    var niz = new Array();
    
    for (var i = 0; i < sellersSection.length; i++) {
         var priceSection = sellersSection[i].getElementsByClassName('a-size-large a-color-price olpOfferPrice a-text-bold')[0];
         var price;

         if(priceSection != undefined){
         	price = priceSection.innerText;
         } else price = 'N/A';
         

         var sellersNames = sellersSection[i].getElementsByClassName('a-spacing-none olpSellerName')[0]
         if(sellersNames.innerText == ""){
         	names = sellersNames.getElementsByTagName('img')[0].alt;
         	
         } else {
         	names = sellersNames.innerText;
         }

         var priceAndSeller = price + " " + names;
         niz.push(priceAndSeller);
        
    }
    return niz;


})();


