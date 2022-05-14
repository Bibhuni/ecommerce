let bar = document.getElementById('bar');
let nav = document.getElementById('navbar');
let close = document.getElementById('close');

    bar.addEventListener('click',function() {
        nav.classList.add('active');
    })

    close.addEventListener('click',function() {
        nav.classList.remove('active');
    })

