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


const aboutn = document.querySelector('.aboutn')
const hcards = document.querySelectorAll('.hcard')

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
}

hcards.forEach(hcard => hcard.addEventListener('click', showCard))
