(() => {
    const refs = {
        openMenuBtn: document.querySelector("[data-menu-open]"),
        menu: document.querySelector("[data-menu]"),
    };

    refs.openMenuBtn.addEventListener("click", toggleMenu);

    function toggleMenu() {
        refs.menu.classList.toggle("is-hidden");
    }
})();