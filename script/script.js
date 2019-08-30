function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
};

function aboutMe() {
    var element = document.querySelector('#About');
    element.scrollIntoView({behavior: 'smooth', block: 'end'});
};

function interests() {
    var element = document.querySelector('#interests');
    element.scrollIntoView({behavior: 'smooth'});
};

function projects() {
    var element = document.querySelector('#Projects');
    element.scrollIntoView({behavior: 'smooth'});
};

function skills() {
    var element = document.querySelector('#skills');
    element.scrollIntoView({behavior: 'smooth', offsetTop: -100});
};


function toTop() {
    var element = document.querySelector('#toTop');
    element.scrollIntoView({behavior:'smooth'});
};