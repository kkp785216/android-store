import header from 'js/partials/_header.js'
document.querySelector('header').innerHTML = header;

import footer from './partials/_footer.js'
document.querySelector('footer').innerHTML = footer;

import sidebar from './partials/_sidebar.js'
document.querySelector('#side-bar').innerHTML = sidebar;

import application from '../api/application.json' assert {type: 'json'}
import game from '../api/game.json' assert {type: 'json'}
import overall from '../api/overall.json' assert {type: 'json'}

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

{
    // Load Top Tranding Apps and Populate into the DOM
    let editors = document.querySelector('.top-app-section .app-row');
    let html = '';
    let result = overall['app_list']
    result.forEach((element, index) => {
        let catogary = first();
        html += `<a href="app.html?${element.package_name}" onclick="singleApp('topApp${index}', 'Tranding')" class="app-collum">
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
}


// Load Games Latest Update and Populate into the DOM
{
    let editors = document.querySelector('.latest-game-section .app-row');
    let html = '';
    let result = game['app_list']
    result.forEach((element, index) => {
        let catogary = first();
        html += `<a href="app.html?${element.package_name}" onclick="singleApp('game${index}', 'Games')" class="app-collum">
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
}

// Application
{
    let editors = document.querySelector('.latest-app-section .app-row');
    let html = '';
    let result = application['app_list']
    result.forEach((element, index) => {
        let catogary = first();
        html += `<a href="app.html?${element.package_name}" onclick="singleApp('latestApp${index}', 'Apps')" class="app-collum">
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
}

// Open particular app page
function singleApp(appId, category) {
    let singleAppApi = document.getElementById(appId).value;
    localStorage.setItem('singleAppApi', singleAppApi);
    localStorage.setItem('app-category', category);
    console.log('this is krishna')
}

// Get more btn set
document.querySelectorAll('.more-app-btn').forEach((element) => {
    let myUrl = element.getAttribute('category');
    element.setAttribute('href', `getmore.html?${myUrl !== null ? myUrl.toLowerCase() : ''}`);
    element.addEventListener('click', () => {
        localStorage.setItem('main-category', element.getAttribute('category'));
    })
});