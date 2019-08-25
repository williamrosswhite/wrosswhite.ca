function ugur_click() {
    var ugurJumbo = document.getElementById('ugur_jumbo');
    var greyhoundJumbo = document.getElementById('greyhound_jumbo');
    var reunionJumbo = document.getElementById('reunion_jumbo');
    ugurJumbo.style.display = "block";
    greyhoundJumbo.style.display = "none";
    reunionJumbo.style.display = "none"
    var ugurLi = document.getElementById('ugur_li');
    var greyhoundLi = document.getElementById('greyhound_li');
    var reunionLi = document.getElementById('reunion_li');
    ugurLi.classList.add('active');
    greyhoundLi.classList.remove('active');
    reunionLi.classList.remove('active');
}

function greyhound_click() {
    var ugurJumbo = document.getElementById('ugur_jumbo');
    var greyhoundJumbo = document.getElementById('greyhound_jumbo');
    var reunionJumbo = document.getElementById('reunion_jumbo');
    ugurJumbo.style.display = "none";
    greyhoundJumbo.style.display = "block";
    reunionJumbo.style.display = "none";
    var ugurLi = document.getElementById('ugur_li');
    var greyhoundLi = document.getElementById('greyhound_li');
    var reunionLi = document.getElementById('reunion_li');
    ugurLi.classList.remove('active');
    greyhoundLi.classList.add('active');
    reunionLi.classList.remove('active');
}

function reunion_click() {
    var ugurJumbo = document.getElementById('ugur_jumbo');
    var greyhoundJumbo = document.getElementById('greyhound_jumbo');
    var reunionJumbo = document.getElementById('reunion_jumbo');
    ugurJumbo.style.display = "none";
    greyhoundJumbo.style.display = "none";
    reunionJumbo.style.display = "block";
    var ugurLi = document.getElementById('ugur_li');
    var greyhoundLi = document.getElementById('greyhound_li');
    var reunionLi = document.getElementById('reunion_li');
    ugurLi.classList.remove('active');
    greyhoundLi.classList.remove('active');
    reunionLi.classList.add('active');
}