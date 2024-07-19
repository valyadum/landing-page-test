(() => {
    const refs = {
        openMenuBtn: document.querySelector("[data-menu-open]"),
        menu: document.querySelector("[data-menu]"),
        overlay: document.getElementById("overlay"),
    };

    refs.openMenuBtn.addEventListener("click", toggleMenu);

    function toggleMenu() {
        document.body.classList.toggle("_lock");
        refs.menu.classList.toggle("is-hidden");
        refs.overlay.classList.toggle("active");
    }
})();

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
const menu = document.querySelector(".mob-menu");
const overlay = document.getElementById("overlay");
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinksClick);
    });

    function onMenuLinksClick(event) {
        const menuLink = event.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if (!menu.classList.contains('is-hidden')) {
                document.body.classList.remove("_lock");
                menu.classList.add("is-hidden");
                overlay.classList.remove("active");
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth",
            });

            event.preventDefault();

            // Додаємо клас 'active' до натиснутого меню
            menuLinks.forEach(link => {
                link.classList.remove('active');
            });
            menuLink.classList.add('active');
        }
    }
}