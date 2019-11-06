function showMenu() {
    document.getElementById("dropdown-menu").classList.toggle("show");

    window.onclick = function (event) {
        if (!event.target.matches('.dropdown-button')) {
            var dropdowns = document.getElementsByClassName("dropdown__item");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show')
                }
            }
        }
    }
}

document.querySelector('.c-nav__burger').addEventListener('click', () => {
    const navInner = document.querySelector('.c-nav__inner');
    navInner.classList.toggle('c-nav__inner--active')
})