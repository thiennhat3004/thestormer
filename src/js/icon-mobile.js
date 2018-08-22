var mobile = document.getElementById('mobile');
var navMobile = document.getElementById('nav-mobile');
navMobile.addEventListener('click',function() {
    if(mobile.style.display == 'none'){
        mobile.style.display = 'block';
    }else{
        mobile.style.display = 'none';
    }
});