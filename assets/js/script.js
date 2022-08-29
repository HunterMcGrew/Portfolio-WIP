// start of my code

// curtain menu global variable
const toggle = document.getElementById("menu");
const mobileMenu = document.getElementById("mobileMenu");
const closeToggle = document.getElementById("closeToggle");

// Light and Dark Mode global variables
const switcher = document.getElementById("switch");
const switcher2 = document.getElementById("switch2");
const bodyBG = document.getElementById("body");
const header = document.getElementById("home");
const mobileCloseClick = document.querySelectorAll(".closeOnClick"); 
let navLinks = document.querySelectorAll(".navLinks");
let socialLinks = document.querySelectorAll(".socialLinks");

// After clicking desktopNav resume link, after scroll down (1 second) it opens
// resume in new tab
const resumeNavLink = document.querySelectorAll(".resumeNavLink");
resumeNavLink.forEach(item => {
    item.addEventListener("click", resumeDelay);
    function resumeDelay() {
        setTimeout(() => {
            window.open("https://huntermcgrew.github.io/Portfolio-WIP/assets/Resume.pdf", "_blank");
    }, 1000)
    }
})

// logo || name reload main page
const logo = document.querySelector(".logo");
logo.onclick = () => window.location = "https://huntermcgrew.github.io/Portfolio-WIP";

// show mobile friendly menu on click
// hide open button on click
toggle.addEventListener("click", () => {
    // mobileMenu.style.display = "flex";
    mobileMenu.classList.remove("slideOut");
    mobileMenu.classList.add("slideIn");
    toggle.style.display = "none";
});

// close mobile menu on click, show open button on click
closeToggle.addEventListener("click", () => {
    // mobileMenu.style.display = "none";
    mobileMenu.classList.remove("slideIn");
    mobileMenu.classList.add("slideOut");
    toggle.style.display = "block";
})

// close functions for each mobile friendly nav link
mobileCloseClick.forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("slideIn");
        mobileMenu.classList.add("slideOut");
        toggle.style.display = "block";
    })
})


// Functions for light and dark mode
let lightMode = true;

// Depending on light or dark mode, it sets the approriate variable for navLinks
const checkNav = () => {
    if (lightMode === true) {
        let navLinks = document.querySelectorAll(".navLinks");
    } else {
        let navLinks = document.querySelectorAll(".navLinksDark");
    }
    return navLinks;
}

// Depending on light or dark mode, it sets the approriate variable for socialLinks
const checkSocial = () => {
    if (lightMode === true) {
        let socialLinks = document.querySelectorAll(".socialLinks");
    } else {
        let socialLinks = document.querySelectorAll(".socialLinksDark");
    }
    return socialLinks;
}

// There are 2 different icons for light and dark mode depending
// on mobile or desktop. 
// switcher is for mobile view
// switcher2 is for desktop view
switcher.addEventListener("click", () => {
    if (lightMode === true) {
        bodyBG.classList.remove("light");
        bodyBG.classList.add("dark");
        header.classList.remove("light");
        header.classList.add("dark");
        checkNav();
        navLinks.forEach(item => {
            item.classList.remove("navLinks");
            item.classList.add("navLinksDark");
    })
        switcher.classList.add("switched");
        switcher2.classList.add("switched");
        checkSocial();
        socialLinks.forEach(link => {
            link.classList.remove("socialLinks");
            link.classList.add("socialLinksDark");
        })
        lightMode = false;
    } else {
        bodyBG.classList.remove("dark");
        bodyBG.classList.add("light");
        header.classList.remove("dark");
        header.classList.add("light");
        checkNav();
        navLinks.forEach(item => {
            item.classList.remove("navLinksDark");
            item.classList.add("navLinks");
    })
        switcher.classList.remove("switched");
        switcher2.classList.remove("switched");
        checkSocial();
        socialLinks.forEach(link => {
            link.classList.remove("socialLinksDark");
            link.classList.add("socialLinks");
        })
        lightMode = true;
    }
})

// Desktop light and dark mode on click events
switcher2.addEventListener("click", () => {
    if (lightMode === true) {
        bodyBG.classList.remove("light");
        bodyBG.classList.add("dark");
        header.classList.remove("light");
        header.classList.add("dark");
        checkNav();
        navLinks.forEach(item => {
            item.classList.remove("navLinks");
            item.classList.add("navLinksDark");
    })
        switcher.classList.add("switched");
        switcher2.classList.add("switched");
        checkSocial();
        socialLinks.forEach(link => {
            link.classList.remove("socialLinks");
            link.classList.add("socialLinksDark");
        })
        lightMode = false;
    } else { 
        bodyBG.classList.remove("dark");
        bodyBG.classList.add("light");
        header.classList.remove("dark");
        header.classList.add("light");
        checkNav();
        navLinks.forEach(item => {
            item.classList.remove("navLinksDark");
            item.classList.add("navLinks");
    })
        switcher.classList.remove("switched");
        switcher2.classList.remove("switched");
        checkSocial();
        socialLinks.forEach(link => {
            link.classList.remove("socialLinksDark");
            link.classList.add("socialLinks");
        })
        lightMode = true;
    }
    
})