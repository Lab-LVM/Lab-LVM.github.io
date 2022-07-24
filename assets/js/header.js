var bar = document.querySelector("body > div.container > div.row > div > div > img");
var nav_box = document.querySelector("body > div.container > div.nav-box");

if (document.cookie == ''){
    document.cookie = 'hidden=true';
}

var hidden = document.cookie.split('=')[1];
bar.addEventListener("click", toggle)

if (hidden=='true') {
    nav_box.style.display = ''
} else {
    nav_box.style.display = 'block'
}

function toggle() {
    if (hidden=='true') {
        nav_box.style.display = 'block'
        document.cookie = 'hidden=false'
        hidden='false'
    } else {
        nav_box.style.display = ''
        document.cookie = 'hidden=true'
        hidden='true'
    }
}
