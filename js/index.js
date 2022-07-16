// Fetch and set header, footer and sidebar into the dom
const partials = (url, dom) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send();
    dom.innerHTML = xhr.responseText;
}
partials('partials/header.txt', document.querySelector('header'));
partials('partials/sidebar.txt', document.querySelector('#side-bar'));
partials('partials/footer.txt', document.querySelector('footer'));

// Fetch Posts
const fetchData = (url) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send();
    return JSON.parse(xhr.responseText)
}
let overall = fetchData('api/overall.txt');
let game = fetchData('api/game.txt');
let application = fetchData('api/application.txt');

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

const fetchPosts = (domElm, postCategory, id) => {
    let html = '';
    let result = postCategory['app_list']
    result.forEach((element, index) => {
        let catogary = first();
        html += `<a href="app.html?${element.package_name}" onclick="singleApp('${id}${index}', 'Tranding')" class="app-collum">
                    <textarea style="display: none;" id="${id}${index}">${JSON.stringify(element)}</textarea>
                    <div class="app-icon">
                        <img src="${element.icon}" alt="">
                    </div>
                    <div class="apps-about">
                        <div class="app-title">
                            <h1>${element.title}</h1>
                        </div>
                        <div class="app-information">
                            <img src="img/utility/arrow.png" alt="">
                            <span>${element.version} + ${catogary}</span>
                        </div>
                    </div>
                </a>`
        function first() {
            let catogary = '';
            element['cat_keys'].forEach((element, index) => {
                element = element.toLocaleLowerCase();
                element = element.replace(element[0], element[0].toUpperCase());
                if (index > 0) {
                    catogary += `, ${element}`;
                }
                else {
                    catogary += `${element}`;
                }
            });
            return catogary;
        }
    });
    domElm.innerHTML = html;
}

// set apps and games their sections
fetchPosts(document.querySelector('.top-app-section .app-row'), overall, 'topApp');
fetchPosts(document.querySelector('.latest-game-section .app-row'), game, 'game');
fetchPosts(document.querySelector('.latest-app-section .app-row'), application, 'latestApp');

// Set Current Post on localStorage
let singleApp = (appId, category) => {
    let singleAppApi = document.getElementById(appId).value;
    localStorage.setItem('singleAppApi', singleAppApi);
    localStorage.setItem('app-category', category);
}

// Get more btn set
document.querySelectorAll('.more-app-btn').forEach((element) => {
    let myUrl = element.getAttribute('category');
    element.setAttribute('href', `getmore.html?${myUrl !== null ? myUrl.toLowerCase() : ''}`);
    element.addEventListener('click', () => {
        localStorage.setItem('main-category', element.getAttribute('category'));
    });
});