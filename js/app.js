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


if(localStorage.getItem('singleAppApi') !== null){
    api = JSON.parse(localStorage.getItem('singleAppApi'));

    // Utility
    let size = parseInt(api.size/1048576) <=1024 ? parseInt(api.size/1048576)+'M' : (api.size/1073741824).toFixed(1)+'G'

    // Breadcrumb
    let breadcrumb = document.createElement('div');
    breadcrumb.innerHTML = `${localStorage.getItem('app-category') !== null? `<li><a href="#">${localStorage.getItem('app-category')}</a><img src="./img/utility/chevron-forward-outline.svg" alt="">
    </li>`:''}<li><a>${api.title}</a></li>`;
    document.querySelector('.breadcrumb ul').append(breadcrumb.firstElementChild);
    document.querySelector('.breadcrumb ul').append(breadcrumb.firstElementChild);

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
    for(let key in check){
        if(key === 'deep_link'){
            hello += `<tr>
                        <th>${check[key]}</th>
                        <td><a href="${api[key]}"><img src="./img/utility/google-play.png" alt="" style="width: 80px; display: block;"></a></td>
                    </tr>`
        }
        else if (key === 'size'){
            hello += `<tr>
                        <th>${check[key]}</th>
                        <td>${size}</td>
                    </tr>`
        }
        else if (key === 'market_update'){
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
        else if(key === 'contains_ads'){
            hello += `<tr>
                        <th>${check[key]}</th>
                        <td>${api[key] === true? 'Yes':'No'}</td>
                    </tr>`
        }
        else{
            hello += `<tr>
                        <th>${check[key]}</th>
                        <td>${api[key]}</td>
                    </tr>`
        }
    }
    document.getElementById('app-info-data').innerHTML = hello;
    document.querySelector('.single-app-icon img').setAttribute('src', api['icon']);

    // Download Link
    let download = document.querySelectorAll('.single-download span');
    download.forEach((element)=>{
        element.innerText += ` (${size})`;
        element.setAttribute('href', api.deep_link);
    });

}
else{
    console.log("you can't visit this page directly");
}