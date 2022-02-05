function classToggle() {
    const navs = document.querySelectorAll('.navbar-items')

    navs.forEach(nav => nav.classList.toggle('navbar-show'));
    navs[navs.length - 1].classList.toggle('last-item')
}

document.querySelector('.navbar-toggle')
    .addEventListener('click', classToggle);