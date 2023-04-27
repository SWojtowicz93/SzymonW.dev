const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__item');
// const navBtnBars = document.querySelector('.burger-btn__bars');
// const allSections = document.querySelectorAll('.section');
// const footerYear = document.querySelector('.footer__year');


const handleNav = () => {
    nav.classList.toggle('nav--active')

    // navBtnBars.classList.remove('black-bars-color');

    allNavItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav--active')
        })
    })

    handleNavItemsAnimation();
}

const handleNavItemsAnimation = () => {
    let delayTime = 1;

    allNavItems.forEach(item => {
        item.classList.toggle('nav-items-animation')
        item.style.animationDelay = '.' + delayTime + 's';
        delayTime++;
    })
}

// navBtn.addEventListener('click', handleNav)
// const handleObserver = () => {
//     const currentSection = window.scrollY;

//     allSections.forEach(section => {

//         if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
//             navBtnBars.classList.add('black-bars-color')
//         } else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
//             navBtnBars.classList.remove('black-bars-color')
//         }
//     })
// }




// const handleCurrentYear = () => {
//     const year = (new Date).getFullYear();
//     footerYear.innerText = year;
// }

// handleCurrentYear();
// navBtn.addEventListener('click', handleNav);
// window.addEventListener('scroll', handleObserver)


// Change website colors and About Cards

const aboutn = document.querySelector('.about')
const hcards = document.querySelectorAll('.hcard')

const header = document.querySelector('#heder')

const projects = document.querySelector('#projects')
const contact = document.querySelector('#contact')
const nameInputContact = document.querySelector('#name')
const emailInputContact = document.querySelector('#email')
const msgInputContact = document.querySelector('#msg')
const btnContact = document.querySelector('#contact-btn')
const slides = document.querySelector('#slides')
const slidesTwoo = document.querySelector('#slides-twoo')
const projectsShadow = document.querySelectorAll('.projects__card-shadow')

let projectsTitleF = document.querySelectorAll('.projects__card-img-title')
let projectsImgInfo = document.querySelectorAll('.projects__card-img-info')
let projectsTitleFa = document.querySelectorAll('.projects__card-info-title');
let projectsInfo = document.querySelectorAll('.projects__card-info');
let projectsLink = document.querySelectorAll('.projects__card-info-list-item');
let headerBTN = document.querySelectorAll('.header__box-text__buttons__btn');


function showCard() {
	hcards.forEach(hcard => {
		hcard.classList.remove('activea')
		this.classList.add('activea')
	})

	handleBgColor(this)
}

const handleBgColor = hcard => {
	const season = hcard.getAttribute('data-season')
	aboutn.setAttribute('data-bg', season)
	header.setAttribute('data-gradient-bg', season)
	projects.setAttribute('data-gradient-bg-top', season)
	contact.setAttribute('data-gradient-bg', season)
	nameInputContact.setAttribute('data-contact', season)
	emailInputContact.setAttribute('data-contact', season)
	msgInputContact.setAttribute('data-contact', season)
	btnContact.setAttribute('data-contact-btn', season)
	slides.setAttribute('data-slides', season)
	slidesTwoo.setAttribute('data-slides', season)

    for (let i=0; i < projectsShadow.length; i++) {
        projectsShadow[i].setAttribute('data-project', season);
    }
    for (let i=0; i < projectsTitleF.length; i++) {
        projectsTitleF[i].setAttribute('data-title', season);
    }
    for (let i=0; i < projectsTitleFa.length; i++) {
        projectsTitleFa[i].setAttribute('data-title', season);
    }
	for (let i=0; i < headerBTN.length; i++) {
        headerBTN[i].setAttribute('data-slides', season);
		headerBTN[i].setAttribute('data-contact-btn', season);
    }
	for (let i=0; i < projectsInfo.length; i++) {
        projectsInfo[i].setAttribute('data-project-info', season);
    }
	for (let i=0; i < projectsLink.length; i++) {
        projectsLink[i].setAttribute('data-link', season);
    }
	for (let i=0; i < projectsImgInfo.length; i++) {
        projectsImgInfo[i].setAttribute('data-title', season);
    }
    
}

hcards.forEach(hcard => hcard.addEventListener('click', showCard))

//Slider

const sliderBox = document.querySelector('.header__slide-imgs')
const sliderBoxTwoo = document.querySelector('.header__slide-imgs-twoo')
const carouselImages = document.querySelectorAll('.img-slide')
const carouselWidth = 100
const carouselSpeed = 8000

let index = 0

const handleCarousel = () => {
	index++
	changeImage()
}

let startCarousel = setInterval(handleCarousel, carouselSpeed)

const changeImage = () => {
	if (index > carouselImages.length/2 - 1) {
		index = 0
	} else if (index < 0) {
		index = carouselImages.length/2 - 1
	}

	sliderBox.style.transform = `translateX(${-index * carouselWidth}%)`
	sliderBoxTwoo.style.transform = `translateX(${-index * carouselWidth}%)`
}


const resetInterval = () => {
    changeImage()
    clearInterval(startCarousel)
	startCarousel = setInterval(handleCarousel, carouselSpeed)
}

