header = document.querySelector("body > div.container > div.row > div > h1 > a");
header.style.color = "white";

for (var i = 1; i < 6; i++) {
    header_menu = document.querySelector("body > div.container > div.row > div > nav > div > ul > li:nth-child("+i+") > a");
    header_menu.style.color = "white";
}

for (var i = 1; i < 6; i++) {
    header_menu = document.querySelector("body > div.container > div.nav-box > li:nth-child("+i+") > a");
    header_menu.style.color = "white";
}

item = document.querySelector("body > div.container > div.nav-box");
item.style.borderColor = "white";

// item = document.querySelector("body > div.container > div.nav-box > li:nth-child(2)");
// item.style.backgroundColor = "black";