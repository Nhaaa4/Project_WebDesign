document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu');
    const navMenu = document.getElementById('nav-menu');
    const profileToggle = document.getElementById('profileClick');
    const profileMenu = document.getElementById('profile');

    const closeAllMenus = () => {
        if (window.innerWidth < 900) {
            navMenu.style.display = 'none';
        }
        profileMenu.style.display = 'none';
    };

    menuToggle.addEventListener('click', () => {
        if (navMenu.style.display === 'flex') {
            navMenu.style.display = 'none';
        } else {
            closeAllMenus();
            navMenu.style.display = 'flex';
        }
    });

    profileToggle.addEventListener('click', () => {
        if (profileMenu.style.display === 'block') {
            profileMenu.style.display = 'none';
        } else {
            closeAllMenus();
            profileMenu.style.display = 'block';
        }
    });

    document.addEventListener('click', (event) => {
        const isMenuClick = menuToggle.contains(event.target) || navMenu.contains(event.target);
        const isProfileClick = profileToggle.contains(event.target) || profileMenu.contains(event.target);

        if (!isMenuClick && !isProfileClick) {
            closeAllMenus();
        }
    });

    const adjustMenus = () => {
        if (window.innerWidth >= 900) {
            navMenu.style.display = 'flex';
            menuToggle.style.display = 'none';
        } else {
            navMenu.style.display = 'none';
            menuToggle.style.display = 'block';
        }
    };

    window.addEventListener('resize', adjustMenus);

    adjustMenus();
});

function addToCart() {
    alert("Your item was successfully added!");
}
