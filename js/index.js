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

fetchKey = fetch('apiKey.txt')
    .then(response => response.text())
    .then(key => {
        loadAllApps(key);
    });

function loadAllApps(key) {
    // Load Top Tranding Apps and Populate into the DOM
    async function topTrandingFunc() {
        params = {
            "list_name": "movers_shakers",
            "cat_key": "OVERALL",
            "country": "IN",
            "limit": "10",
            "access_token": key,
        }
        // url = `https://data.42matters.com/api/v3.0/android/apps/top_google_charts.json?list_name=${params["list_name"]}&cat_key=${params["cat_key"]}&country=${params["country"]}&limit=${params["limit"]}&access_token=${params["access_token"]}`;
        url = 'api/overall.txt';

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
        result.forEach((element, index) => {
            let catogary = first();
            html += `<a onclick="singleApp('topApp${index}', 'Tranding')" class="app-collum">
                    <textarea style="display: none;" id="topApp${index}">${JSON.stringify(element)}</textarea>
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
        // url = `https://data.42matters.com/api/v3.0/android/apps/top_google_charts.json?list_name=${params["list_name"]}&cat_key=${params["cat_key"]}&country=${params["country"]}&limit=${params["limit"]}&access_token=${params["access_token"]}`;
        url = 'api/game.txt';

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
        result.forEach((element, index) => {
            let catogary = first();
            html += `<a onclick="singleApp('game${index}', 'Games')" class="app-collum">
                    <textarea style="display: none;" id="game${index}">${JSON.stringify(element)}</textarea>
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
                </a>`;
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
        // url = `https://data.42matters.com/api/v3.0/android/apps/top_google_charts.json?list_name=${params["list_name"]}&cat_key=${params["cat_key"]}&country=${params["country"]}&limit=${params["limit"]}&access_token=${params["access_token"]}`;
        url = 'api/application.txt';

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
        result.forEach((element, index) => {
            let catogary = first();
            html += `<a onclick="singleApp('latestApp${index}', 'Apps')" class="app-collum">
                    <textarea style="display: none;" id="latestApp${index}">${JSON.stringify(element)}</textarea>
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
}

function singleApp(appId, category){
    let singleAppApi = document.getElementById(appId).value;
    localStorage.setItem('singleAppApi', singleAppApi);
    localStorage.setItem('app-category', category);
    setTimeout(() => {
        location.href = `app.html?${JSON.parse(singleAppApi).package_name}`;
    }, 0);
}