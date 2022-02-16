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

// Let find api key

function apiKey() {
    let key;
    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://kkp785216.github.io/project4/private/apiKey.txt', true);
    xhr.onload = function () {
        key = this.responseText;
    }
    xhr.send();
    return key;
}
const key = '8cc04ff3720f0a2c8cc3724a09944bd05d333537';

// Loading preview before loading apps
loading = true;
function loadingFunc() {
    if (loading == true) {
        let editors = document.querySelectorAll('.editors-choice .app-row');
        Array.from(editors).forEach((element) => {
            element.style.opacity = ".5"
        })
    }
}
loadingFunc();
function loadingExitFunc(section) {
    section.style.opacity = '1';
}

// Load Top Tranding Apps and Populate into the DOM
async function topTrandingFunc() {
    params = {
        "list_name": "movers_shakers",
        "cat_key": "OVERALL",
        "country": "IN",
        "limit": "10",
        "access_token": key,
    }
    url = `https://data.42matters.com/api/v3.0/android/apps/top_google_charts.json?list_name=${params["list_name"]}&cat_key=${params["cat_key"]}&country=${params["country"]}&limit=${params["limit"]}&access_token=${params["access_token"]}`;

    const result = await fetch(url);
    if (result.status === 200) {
        return result.json();
    }
}
let topTrandingResult = topTrandingFunc();
topTrandingResult.then((result) => {
    let editors = document.querySelector('.top-app-section .app-row');
    let html = '';
    result = result['app_list']
    result.forEach((element) => {
        let catogary = first();
        html += `<a href="${element.deep_link}" class="app-collum">
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
    editors.innerHTML = html;
    loadingExitFunc(editors);
});


// Load Games Latest Update and Populate into the DOM
async function latestGamesFunc() {
    params = {
        "list_name": "topselling_new_free",
        "cat_key": "GAME",
        "country": "IN",
        "limit": "10",
        "access_token": key,
    }
    url = `https://data.42matters.com/api/v3.0/android/apps/top_google_charts.json?list_name=${params["list_name"]}&cat_key=${params["cat_key"]}&country=${params["country"]}&limit=${params["limit"]}&access_token=${params["access_token"]}`;

    const result = await fetch(url);
    if (result.status === 200) {
        return result.json();
    }
}
let latestGamesResult = latestGamesFunc();
latestGamesResult.then((result) => {
    let editors = document.querySelector('.latest-game-section .app-row');
    let html = '';
    result = result['app_list']
    result.forEach((element) => {
        let catogary = first();
        html += `<a href="${element.deep_link}" class="app-collum">
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
    editors.innerHTML = html;
    loadingExitFunc(editors);
});


// Load Apps Latest Update and Populate into the DOM
async function latestAppsFunc() {
    params = {
        "list_name": "topselling_new_free",
        "cat_key": "APPLICATION",
        "country": "IN",
        "limit": "10",
        "access_token": key,
    }
    url = `https://data.42matters.com/api/v3.0/android/apps/top_google_charts.json?list_name=${params["list_name"]}&cat_key=${params["cat_key"]}&country=${params["country"]}&limit=${params["limit"]}&access_token=${params["access_token"]}`;

    const result = await fetch(url);
    if (result.status === 200) {
        return result.json();
    }
}
let latestAppsResult = latestAppsFunc();
latestAppsResult.then((result) => {
    let editors = document.querySelector('.latest-app-section .app-row');
    let html = '';
    result = result['app_list']
    result.forEach((element) => {
        let catogary = first();
        html += `<a href="${element.deep_link}" class="app-collum">
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
    editors.innerHTML = html;
    loadingExitFunc(editors);
});