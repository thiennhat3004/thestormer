var info = document.getElementsByClassName('hover');
var infoLength = info.length;
function info1(index) {
    for(var i = 0;i< infoLength ;i++){
        info[index].style.opacity = '0.7';
        info[i].style.opacity = '1';
        
    }
}

function info2() {
    for(var i= 0;i < infoLength ;i++){
        info[i].style.opacity = '1';
    }
}

