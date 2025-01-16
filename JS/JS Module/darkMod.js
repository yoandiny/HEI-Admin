let isDarkMode = false;
const sun = document.getElementById('sun');


 function darkMode() {
    var root = document.documentElement;
const slider = document.getElementsByClassName('slider')[0];

    if (isDarkMode) {
        isDarkMode = false;

        sun.style.color = '#001948';
        slider.style.transform = 'translateX(0)';
        slider.style.transition = 'all 0.5s';
        root.style.setProperty('--primary-color', '#fff');
        root.style.setProperty('--secondary-color', '#001948');
        return;
    }else{
       isDarkMode = true;
       sun.style.color = 'gold';
       slider.style.transform = 'translateX(26px)';
    root.style.setProperty('--primary-color', '#001948');
    root.style.setProperty('--secondary-color', '#fff');
    return;
    }

    
}

if(!isDarkMode){
    sun.style.color = '#001948';
}




