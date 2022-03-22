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
    api = JSON.parse(localStorage.getItem('singleAppApi'));

    // Utility
    let size = parseInt(api.size / 1048576) <= 1024 ? parseInt(api.size / 1048576) + 'M' : (api.size / 1073741824).toFixed(1) + 'G'

    // Breadcrumb
    let breadcrumb = document.createElement('div');
    let categoryName = {
        OVERALL: 'Tranding',
        APPLICATION: 'Apps',
        GAME: 'Games',

        ART_AND_DESIGN: 'Art & Design',
        AUTO_AND_VEHICLES: 'Auto & Vehicles',
        BEAUTY: 'Beauty',
        BOOKS_AND_REFERENCE: 'Books & Reference',
        BUSINESS: 'Business',
        COMICS: 'Comics',
        COMMUNICATION: 'Communication',
        DATING: 'Dating',
        EDUCATION: 'Education',
        ENTERTAINMENT: 'Entertainment',
        EVENTS: 'Events',
        FINANCE: 'Finance',
        FOOD_AND_DRINK: 'Food & Drink',
        HEALTH_AND_FITNESS: 'Health & Fitness',
        HOUSE_AND_HOME: 'House & Home',
        LIFESTYLE: 'Lifestyle',
        MAPS_AND_NAVIGATION: 'Maps & Navigation',
        MEDICAL: 'Medical',
        MUSIC_AND_AUDIO: 'Music & Audio',
        NEWS_AND_MAGAZINES: 'News & Magazines',
        PARENTING: 'Parenting',
        PERSONALIZATION: 'Personalization',
        PHOTOGRAPHY: 'Photography',
        PRODUCTIVITY: 'Productivity',
        SHOPPING: 'Shopping',
        SOCIAL: 'Social',
        SPORTS: 'Sports',
        TOOLS: 'Tools',
        TRAVEL_AND_LOCAL: 'Travel & Local',
        VIDEO_PLAYERS: 'Video Players & Editors',
        WEATHER: 'Weather',
        LIBRARIES_AND_DEMO: 'Libraries & Demo',

        GAME_ARCADE: 'Arcade',
        GAME_PUZZLE: 'Puzzle',
        GAME_CARD: 'Cards',
        GAME_CASUAL: 'Casual',
        GAME_RACING: 'Racing',
        GAME_SPORTS: 'Sport Games',
        GAME_ACTION: 'Action',
        GAME_ADVENTURE: 'Adventure',
        GAME_BOARD: 'Board',
        GAME_CASINO: 'Casino',
        GAME_EDUCATIONAL: 'Educational',
        GAME_MUSIC: 'Music Games',
        GAME_ROLE_PLAYING: 'Role Playing',
        GAME_SIMULATION: 'Simulation',
        GAME_STRATEGY: 'Strategy',
        GAME_TRIVIA: 'Trivia',
        GAME_WORD: 'Word Games',
        ANDROID_WEAR: 'Android Wear',
    }
    api.cat_keys.reverse().forEach((element)=>{
        breadcrumb.innerHTML += `<li><a href="getmore.js?${element.toLowerCase()}" class="more-app-btn" category="${element}">${categoryName[element]}</a><img src="./img/utility/chevron-forward-outline.svg" alt=""></li>`
    });
    breadcrumb.innerHTML += `<li><a>${api.title}</a></li>`;
    Array.from(breadcrumb.children).forEach((element)=>{
        document.querySelector('.breadcrumb ul').append(element);
    });


    // App Title
    document.querySelector('.single-app-title').textContent = `${api.title} v${api.version} Latest Version Downlaod`;

    // App content name, category, version etc.
    let hello = '';
    let check = {
        title: 'App Name',
        developer: 'Publisher',
        category: 'Category',
        size: 'Size',
        version: 'Latest Version',
        deep_link: 'Get it On',
        market_update: 'Last Updated',
        contains_ads: 'Contains Ads'
    }
    for (let key in check) {
        if (key === 'deep_link') {
            hello += `<tr>
                        <th>${check[key]}</th>
                        <td><a href="${api[key]}"><img src="./img/utility/google-play.png" alt="" style="width: 80px; display: block;"></a></td>
                    </tr>`
        }
        else if (key === 'size') {
            hello += `<tr>
                        <th>${check[key]}</th>
                        <td>${size}</td>
                    </tr>`
        }
        else if (key === 'market_update') {
            function showTime() {
                time = new Date(api[key]);
                let date = time.getDate();
                let month;
                switch (time.getMonth()) {
                    case 0: month = 'Jan'; break;
                    case 1: month = 'Feb'; break;
                    case 2: month = 'Mar'; break;
                    case 3: month = 'Apr'; break;
                    case 4: month = 'May'; break;
                    case 5: month = 'Jun'; break;
                    case 6: month = 'Jul'; break;
                    case 7: month = 'Aug'; break;
                    case 8: month = 'Sep'; break;
                    case 9: month = 'Oct'; break;
                    case 10: month = 'Novr'; break;
                    case 11: month = 'Dec'; break;
                }
                let year = time.getFullYear();
                return `${month} ${date}, ${year}`;
            }
            hello += `<tr>
                        <th>${check[key]}</th>
                        <td>${showTime()}</td>
                    </tr>`
        }
        else if (key === 'contains_ads') {
            hello += `<tr>
                        <th>${check[key]}</th>
                        <td>${api[key] === true ? 'Yes' : 'No'}</td>
                    </tr>`
        }
        else {
            hello += `<tr>
                        <th>${check[key]}</th>
                        <td>${api[key]}</td>
                    </tr>`
        }
    }
    document.getElementById('app-info-data').innerHTML = hello;
    document.querySelector('.single-app-icon img').setAttribute('src', api['icon']);

    // What's New
    document.querySelector('.whats-new').innerText = api.what_is_new;

    // Download Link
    let download = document.querySelectorAll('.single-download');
    download.forEach((element) => {
        element.setAttribute('href', `download.html?${api.package_name}`);
        element.querySelector('span').innerText += ` (${size})`;
    });
    document.querySelector('.bottom-download-title').innerText = 'Download ' + api.title;

    // Description
    document.querySelector('.single-app-disc').innerText = api.description;

    // Screenshots
    let screenshots = '';
    api.screenshots.forEach((element) => {
        screenshots += `<img src="${element}">`
    })
    document.querySelector('.app-screenshot').innerHTML += screenshots;
}
else {
    console.log("you can't visit this page directly");
}

// Get more btn set
document.querySelectorAll('.more-app-btn').forEach((element) => {
    let myUrl = element.getAttribute('category');
    element.setAttribute('href', `getmore.html?${myUrl !== null ? myUrl.toLowerCase() : ''}`);
    element.addEventListener('click', () => {
        localStorage.setItem('main-category', element.getAttribute('category'));
    })
});