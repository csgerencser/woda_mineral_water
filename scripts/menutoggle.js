var menuVisible = false;
const menuToggle = document.querySelector("#menutoggle");
const menuToggleOpen = document.querySelector("#menutoggle-open");
const menuToggleClose = document.querySelector("#menutoggle-close");
const topMenu = document.querySelector("#topmenu");
const fixHeader = document.querySelector("#fixheader")

menuToggle.addEventListener("click", (event) => {
    if (menuVisible) {
        // hide the menuitems
        // shrink the header to 80px
        // show the hamburger symbol
        topMenu.style.opacity = 0;
        setTimeout(() => {
            topMenu.style.display = "none";
            fixHeader.style.height = "80px";    
        }, 500);
    } else {
        // show the menuitems
        // enlarge the header to fullscreen (100vh)
        // show the square symbol
        fixHeader.style.height = "100vh";
        setTimeout(() => {
            topMenu.style.display = "block";
            setTimeout(() => {
                topMenu.style.opacity = 1;
            }, 100);
        }, 500);
    }
    menuVisible = !menuVisible;
})

function toggleMenuVisibility(isVisible) {
    if (isVisible) {
        topMenu.style.display = "block";
        topMenu.style.opacity = 1;
    } else {
        topMenu.style.display = "none";
        topMenu.style.opacity = 0;
    }
}

window.addEventListener('resize', (event) => {
    if (document.documentElement.clientWidth > 1024) {
        toggleMenuVisibility(true);
    } else {
        toggleMenuVisibility(false);
    }
});
