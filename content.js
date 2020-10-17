
var HODOR = HODOR || {};
var conversion;

HODOR.main =  (function() {
	
	
  var init = function () {
	  
	  if(conversion == 2) {
		location.reload();	
	  }
	var bodyElement = document.getElementsByTagName('body');
	
    if (bodyElement != undefined && bodyElement[0] != undefined) {
			var elements = bodyElement[0].getElementsByTagName('*');
			for (var i = 0; i < elements.length; i++) {
				var element = elements[i];
				
				if(element.tagName == 'SCRIPT' || element.tagName == 'STYLE' || element.tagName == 'NOSCRIPT')
					continue;
				
				for (var j = 0; j < element.childNodes.length; j++) {
					var node = element.childNodes[j];
					
					if(node.tagName == 'SCRIPT' || node.tagName == 'STYLE' || node.tagName == 'NOSCRIPT')
						continue;

					if (node.nodeType === 3) {
						node.nodeValue = " Hodor ";
						conversion = 2;
					}
				}
			}
		} 
  }
  return {
		init : init
	}

})();

HODOR.main.init();