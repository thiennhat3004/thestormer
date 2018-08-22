var menu1 = document.getElementById('menu');
var toTop = document.getElementById('top');  
var banner = document.getElementById('banner');
var navRight = document.getElementById('nav-right');
var navMiddle = document.getElementById('nav-middle');
window.onscroll = function() {
    
    if(window.pageYOffset >= 500){
        toTop.style.display = 'block';
        menu1.classList.add('sticky');
        banner.style.paddingTop = '72px';
        navRight.style.display = 'none';
        navMiddle.style.fontSize = '0.9em';
        
    }
    else{
        toTop.style.display = '';
        menu1.classList.remove('sticky');
        banner.style.paddingTop = '';
        navMiddle.style.fontSize = '';
    }
        

}

toTop.addEventListener('click',function() {
    document.documentElement.scrollTop = 0;
    
});