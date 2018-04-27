
//XMLHttpRequest 对象用于在后台与服务器交换数据。

//
function getXMLHttpRequest() {
    if (window.XMLHttpRequest) {// code for all new browsers
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) {// code for IE5 and IE6
        return new ActiveXObject("Microsoft.XMLHTTP");
    }else {
        return false;
    }
}

function request(method,url,headerName,headerValue,async, username, password,body,succcessHandel,errorHandel) {
    var xmlhttp = getXMLHttpRequest();
    if(!xmlhttp){return errorHandel();}
    xmlhttp.setRequestHeader(headerName, headerValue);
    xmlhttp.open(method,url,async, username, password);
    xmlhttp.send(body);

    xmlhttp.onreadystatechange=function () {
        if (xmlhttp.readyState==4) {// 4 = "loaded"
            if (xmlhttp.status==200) {// 200 = OK
                var statusText = xmlhttp.statusText;
                var text = xmlhttp.responseText;
                var xml = xmlhttp.responseXML;
                return succcessHandel(xmlhttp);
            }
        }
        return errorHandel();
    }(xmlhttp);
}