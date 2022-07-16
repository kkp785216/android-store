import header from './partials/header.js'
document.querySelector('header').innerHTML = header;

import footer from './partials/footer.js'
document.querySelector('footer').innerHTML = footer;

// PC and Mobile Menu Same to Same
let menu = document.querySelector('.menu');
let mobileMmenu = document.querySelector('.mobile-menu');
mobileMmenu.innerHTML = menu.innerHTML;

// Toggle Button for mobile navigation
let Toggle = document.getElementById('toggle');
let Toggle1 = document.getElementById('toggle1');
let mobileHeader = document.querySelector('.mobile-header')
let navegationOverlay = document.querySelector('.navegation-overlay');
Toggle.onclick = function () {
    mobileHeader.classList.toggle('active');
    navegationOverlay.classList.toggle('active');
};
Toggle1.onclick = function () {
    mobileHeader.classList.toggle('active')
    navegationOverlay.classList.toggle('active');
};
navegationOverlay.onclick = function () {
    mobileHeader.classList.toggle('active');
    navegationOverlay.classList.toggle('active');
}


if (localStorage.getItem('singleAppApi') !== null) {
    let api = JSON.parse(localStorage.getItem('singleAppApi'));

    // Breadcrumb
    let breadcrumb = document.createElement('div');
    breadcrumb.innerHTML = `<li><a>Download</a><img src="./img/utility/chevron-forward-outline.svg" alt="">
        </li><li><a>${api.title}</a></li>`;
    document.querySelector('.breadcrumb ul').append(breadcrumb.firstElementChild);
    document.querySelector('.breadcrumb ul').append(breadcrumb.firstElementChild);

    // App Title
    document.querySelector('.single-app-title').textContent = `Downloading ${api.title} v${api.version} Latest Version Downlaod`;

    // Screenshots
    let screenshots = '';
    api.screenshots.forEach((element)=>{
        screenshots += `<img src="${element}">`
    })
    document.querySelector('.app-screenshot').innerHTML += screenshots;

    // Download Link
    let download = document.querySelector('.single-download');
    // Download Timer
    let timer = 10;
    function updateTimer() {
        document.querySelector('.download-timer').innerHTML = `<p style="text-align: center;">Your download will start within <span style="color: blue;">${timer--}</span> second.</p>`
    }
    let interval = setInterval(() => {
        if (timer === 0) {
            clearInterval(interval);
            setTimeout(() => {
                document.querySelector('.download-timer').innerHTML = '';
                download.style.display = 'flex';
            }, 1500);
        }
        updateTimer();
    }, 1500);


    download.setAttribute('href', api.deep_link);

}
else {
    console.log("you can't visit this page directly");
}

// Get more btn set
document.querySelectorAll('.more-app-btn').forEach((element)=>{
    let myUrl = element.getAttribute('category');
    element.setAttribute('href', `getmore.html?${myUrl !==null ? myUrl.toLowerCase(): ''}`);
    element.addEventListener('click', ()=>{
        localStorage.setItem('main-category', element.getAttribute('category'));
    })
});