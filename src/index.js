const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};


const hdrNavLinks = document.querySelectorAll('header nav a');
const arrLinkTxt = Object.values(siteContent.nav);
const logoImg = document.querySelector('#logo-img');
const mainHeading = document.querySelector('h1');
const ctaButton = document.querySelector('.cta-text button');
const ctaImg = document.querySelector('.cta img')
const midImg = document.querySelector('#middle-img');
const contFeatures = document.querySelector('.top-content .text-content:first-child');
const contAbout = document.querySelector('.top-content .text-content:last-child');
const contServices = document.querySelector('.bottom-content .text-content:first-child');
const contProducts = document.querySelector('.bottom-content .text-content:nth-child(2)');
const contVision = document.querySelector('.bottom-content .text-content:last-child');
const contents = [contFeatures, contAbout, contServices, contProducts, contVision];
const objContents = Object.values(siteContent["main-content"]);
const h4s = objContents.filter((val, i) => i % 2 === 0 )
const justContent = objContents.filter((val, i) => i % 2 === 1)
const contactH4 = document.createElement('h4');
const contactSect = document.querySelector('section.contact');



hdrNavLinks.forEach((element, i)=> element.textContent = arrLinkTxt[i]);
logoImg.src = siteContent.images["logo-img"];
mainHeading.textContent = siteContent.cta.h1;
ctaButton.textContent = siteContent.cta.button;
ctaImg.src = siteContent.images["cta-img"];
midImg.src = siteContent.images["accent-img"];

contents.forEach((div, i) => {
  div.firstChild.textContent = h4s[i];
  div.lastChild.textContent = justContent[i]
})


contactSect.appendChild(contactH4);
contactH4.textContent = siteContent["contact"]["contact-h4"];

contactH4.nextElementSibling.textContent = siteContent["contact"]["address"];



