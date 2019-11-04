function showMenu() {
    document.getElementById("dropdown-menu").classList.toggle("show");

    window.onclick = function (event) {
        if (!event.target.matches('.dropdown-button')) {
            var dropdowns = document.getElementsByClassName("dropdown-item");
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

function burgerMenu(){
    var x = document.getElementById("topNav");
    if(x.className==="navbar"){
        x.className+=" responsive";
    }else{
        x.className="navbar";
    }
}