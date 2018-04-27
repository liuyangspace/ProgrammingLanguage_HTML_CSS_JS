

function dom(xmlString) {
    if (window.DOMParser) {
        parser=new DOMParser();
        xmlDoc=parser.parseFromString(xmlString,"text/xml");
    } else  {// Internet Explorer
        xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
        xmlDoc.async="false";
        xmlDoc.loadXML(xmlString);
    }
}