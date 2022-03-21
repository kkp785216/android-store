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
    let hello = '';
    let check = {
        title: 'App Name',
        developer: 'Publisher',
        category: 'Category',
        size: 'Size',
        version: 'Latest Version',
        deep_link: 'Get it On'
    }
    for(let key in check){
        if(key === 'deep_link'){
            hello += `<tr>
                        <th>${check[key]}</th>
                        <td><a href="${api[key]}"><img src="./img/utility/google-play.png" alt="" style="width: 80px; display: block;"></a></td>
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
}
else{
    console.log("you can't visit this page directly");
}