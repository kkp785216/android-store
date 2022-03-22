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



if (localStorage.getItem('main-category') !== null) {

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

    async function topTrandingFunc() {
        params = {
            "list_name": "movers_shakers",
            "cat_key": "OVERALL",
            "country": "IN",
            "limit": "10",
            // "access_token": key,
        }
        // url = `https://data.42matters.com/api/v3.0/android/apps/top_google_charts.json?list_name=${params["list_name"]}&cat_key=${params["cat_key"]}&country=${params["country"]}&limit=${params["limit"]}&access_token=${params["access_token"]}`;
        url = `catApi/${localStorage.getItem('main-category')}.txt`;

        const result = await fetch(url);
        if (result.status === 200) {
            return result.json();
        }
    }
    let topTrandingResult = topTrandingFunc();
    topTrandingResult.then((result) => {
        let editors = document.querySelector('.top-app-section .app-row');
        document.querySelector('.app-category').innerText = categoryName[localStorage.getItem('main-category')];
        let html = '';
        result = result['app_list']
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
    });
}
else {

}


function singleApp(appId, category){
    let singleAppApi = document.getElementById(appId).value;
    localStorage.setItem('singleAppApi', singleAppApi);
    localStorage.setItem('app-category', category);
}


// Get more btn set
document.querySelectorAll('.more-app-btn').forEach((element)=>{
    let myUrl = element.getAttribute('category');
    element.setAttribute('href', `getmore.html?${myUrl !==null ? myUrl.toLowerCase(): ''}`);
    element.addEventListener('click', ()=>{
        localStorage.setItem('main-category', element.getAttribute('category'));
    })
});