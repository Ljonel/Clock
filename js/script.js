const time = document.querySelector('.time-clock');
const hello = document.querySelector('#hello');
const name = document.querySelector(".name");
const focus = document.querySelector("#focus");
// const ampm = document.querySelector("#ampm");


function showTime(){
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes().toString();
    let sec = today.getSeconds().toString();
    
    if(hour.length < 2){
        hour = "0"+hour;
    }
    if(min.length < 2){
        min = "0" + min;
    }
    if(sec.length < 2){
        sec = "0"+sec;
    }

    //AM/PM
   
    if(hour < 12){
        time.innerHTML = hour+'<span>:</span>'+min+'<span>:</span>'+sec+'AM';
        document.body.style.backgroundImage="url('../dist/img/afternoon.jpg')";
        hello.textContent = "Good Morning";

    }else if(hour < 18) {
        time.innerHTML = hour+'<span>:</span>'+min+'<span>:</span>'+sec+'<span>  PM</span>';
        document.body.style.backgroundImage="url('../dist/img/2.jpg')";
        hello.textContent = "Good Afternoon";

    }
    else{
        time.innerHTML = hour+'<span>:</span>'+min+'<span>:</span>'+sec;
        document.body.style.backgroundImage="url('../dist/img/night.png')"; 
        hello.textContent = "Good Evening";
        const quest = document.querySelector("#quest");
        quest.textContent = "What is your focus at this time?"


    }
    
   
    setTimeout(showTime, 1000);
}

// Get the name
function getName(){
    if(localStorage.getItem('name') === null){
        name.textContent = '[Enter your name]';
    }else{
        name.textContent = localStorage.getItem('name');
    }
}
// GET FOCUS OF NAME
function getFocus(){
    if(localStorage.getItem('focus') === null){
        focus.textContent = '[Enter focus]';
    }else{
        focus.textContent = localStorage.getItem('focus');
    }
}

name.addEventListener('keypress', function(e){
    if(e.type === 'keypress'){
        //this is ENTER
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    }else{
        localStorage.setItem('name', e.target.innerText);
    }
})
focus.addEventListener('keypress', function(e){
    if(e.type === 'keypress'){
        //this is ENTER
        if(e.which == 13 || e.keyCode == 13){
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    }else{
        localStorage.setItem('focus', e.target.innerText);
    }
})

//Run
showTime();
getName();
getFocus();