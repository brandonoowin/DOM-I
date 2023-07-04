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

const italic = document.querySelectorAll("nav a");
italic.forEach((element) => {
  element.classList.add('italic'); 
});


const navLinks = document.querySelectorAll('nav a');
navLinks.forEach((link, index) => {
  const navItem = `nav-item-${index + 1}`;
  link.textContent = siteContent.nav[navItem];
});

const ctaText = document.querySelector(".cta h1");
ctaText.textContent = siteContent["cta"]["h1"];

const ctaButtonText = document.querySelector(".cta button");
ctaButtonText.textContent = siteContent["cta"]["button"];

const greatIdeaLogo = document.querySelector("#logo-img");
greatIdeaLogo.src = siteContent["images"]["logo-img"]
const ctaImg = document.querySelector("#cta-img"); 
ctaImg.src = siteContent["images"]["cta-img"];

const middleImg = document.querySelector(".middle-img"); 
middleImg.src = siteContent["images"]["accent-img"]




// const mainContent = document.querySelector('.main-content');
// mainContent.style.display = 'flex';

const textContents = document.querySelectorAll('.top-content .text-content');
const featureHead = textContents[0].querySelector('h4')
featureHead.textContent = siteContent['main-content']['features-h4'];
const featureP = textContents[0].querySelector('p');
featureP.textContent = siteContent['main-content']["features-content"];

const aboutHeading = textContents[1].querySelector('h4');
aboutHeading.textContent = siteContent['main-content']['about-h4'];
const aboutP = textContents[1].querySelector('p');
aboutP.textContent = siteContent['main-content']['about-content'];


const textContentsBottom = document.querySelectorAll('.bottom-content .text-content');
const serviceHead = textContentsBottom[0].querySelector('h4')
serviceHead.textContent = siteContent['main-content']["services-h4"];
const serviceP = textContentsBottom[0].querySelector('p');
serviceP.textContent = siteContent['main-content']["services-content"];

const productHead = textContentsBottom[1].querySelector('h4');
productHead.textContent = siteContent['main-content']["product-h4"];
const productP = textContentsBottom[1].querySelector('p');
productP.textContent = siteContent['main-content']['product-content'];

const visionHead = textContentsBottom[2].querySelector('h4');
visionHead.textContent = siteContent['main-content']["vision-h4"];
const visionP = textContentsBottom[2].querySelector('p');
visionP.textContent = siteContent['main-content']["vision-content"];

const contactSectionHead = document.querySelector('.contact h4');
contactSectionHead.textContent = siteContent['contact']['contact-h4']

const contactPTags = document.querySelectorAll('.contact p');
const address = contactPTags[0]
address.textContent = siteContent['contact']['address'];
const phone = contactPTags[1]
phone.textContent = siteContent['contact']['phone'];
const email = contactPTags[2]
email.textContent = siteContent['contact']['email'];

const footer = document.querySelector('footer a');
footer.textContent = siteContent['footer']['copyright']
footer.classList.add("bold");

console.log('project wired!')
