const navToggle = document.querySelector('.nav-toggle');
const iconHamburger = document.querySelector('#icon-hamburger');
const iconClose = document.querySelector('#icon-close');
const topNav = document.querySelector('.top-nav');

navToggle.addEventListener('click', function() {
    topNav.toggleAttribute('data-visible');

    if (topNav.hasAttribute('data-visible')) {
        iconHamburger.setAttribute('data-visible', 'false');
        iconClose.setAttribute('data-visible', 'true');

    } else {
        iconHamburger.setAttribute('data-visible', 'true');
        iconClose.setAttribute('data-visible', 'false');

    }
});

// Destination Page
const btnTab = document.querySelectorAll('.btn-tab');
const tabContent = document.querySelectorAll('.tab-content');
const imgTab = document.querySelector('#img-tab');


// Tabs
btnTab.forEach((btn) => {
    btn.addEventListener('click', function() {

        tabContent.forEach((detail) => {
            detail.setAttribute('data-visible', 'false');
        });

        btnTab.forEach(btn => {
            btn.removeAttribute('data-active');
        });
        btn.setAttribute('data-active', 'true');

        const selectedTab = document.querySelector('#details-' + btn.id);
        selectedTab.setAttribute('data-visible', 'true');

        if (document.body.classList[0] === 'technology') {
            let orient = '';
            if (getDeviceWidth() < 800) {
                orient = 'landscape';
            } else {
                orient = 'portrait';
            }
            imgTab.src = `assets/${btn.getAttribute('data-source')}${orient}.jpg`;
        } else {
            imgTab.src = `assets/${btn.getAttribute('data-source')}`;
        }

    });
});




function getDeviceWidth() {
    return document.documentElement.clientWidth;
}