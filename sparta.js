window.addEventListener('DOMContentLoaded', function()
{
    if (!window.location.href.includes('github')) return;

    const body = document.querySelector('body');
    
    let a = document.createElement('a');
    a.href = 'https://spartacodingclub.kr';
    a.target = '_blank';

    let logo = document.createElement('img');
    logo.src = 'logo_teamsparta.png'; //'https://s3.ap-northeast-2.amazonaws.com/materials.spartacodingclub.kr/free/logo_teamsparta.png';
    logo.width = '80';

    if (window.innerHeight - body.clientHeight > 100) {
        a.style.cssText = 'display: flex; justify-content:center; align-items: center; margin-bottom: 10px; position:absolute; bottom: 30px; left: calc(50% - 40px); width: 80px; height: 0;'
    } else {
        a.style.cssText = 'display: flex; justify-content:center; align-items: center; margin-bottom: 10px; position:relative; top: 10px; left: calc(50% - 40px); width: 80px; height: 0;'
        logo.style.cssText = 'padding-bottom: 10px;'
    }

    a.appendChild(logo);
    body.appendChild(a);
});

function blank__() {
    if (!window.location.href.includes('github')) return;

    return;
}