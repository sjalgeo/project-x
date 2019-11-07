document.querySelector('.c-nav__burger').addEventListener('click', () => {
    const navInner = document.querySelector('.c-nav__inner');
    navInner.classList.toggle('c-nav__inner--active')
})