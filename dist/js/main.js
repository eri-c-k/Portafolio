'use strict';

// ################################ Time line Section transitions ####################################
const items = document.querySelectorAll('#timeline li');

const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const run = () =>
  items.forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add('show');
    }
  });

// Events
window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);

// ########################### Type Write Effect ####################################
// ES6 Class
class TypeWriter {
  constructor(txtElement, words, wait = 2000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 5);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current Index Of Word
    const current = this.wordIndex % this.words.length;

    // Get full text of current word
    const fulltxt = this.words[current];

    //Check if deleting
    if (this.isDeleting) {
      //Remove a caracter
      this.txt = fulltxt.substring(0, this.txt.length - 1);
    } else {
      // Add a caracter
      this.txt = fulltxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Tipe speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fulltxt) {
      // Make pause at the end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      // Move to the next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 300;
    }

    setTimeout(() => this.type(), 400);
  }
}

// Init on DOM load
document.addEventListener('DOMContentLoaded', init);

// Init App
function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');

  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}

// ########################## Modal Window ##############################################
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const menuToggler = document.querySelector('.menu-wrap');
const menu = document.querySelector('.menu');

const modals = {
  btnsOpenModal: [
    'modal-1',
    'modal-2',
    'modal-3',
    'modal-4',
    'modal-5',
    'modal-6',
    'modal-7',
  ],

  'modal-1': {
    title: 'EdgeLedger Website',
    img: 1,
    id: 'modal-1',
    text: 'It is a business Website template build on HTML, CSS and JQuery, the layout is mainly design with flexbox and the navigation bar smooth scrolling the to the landing page.',
    url: 'https://naughty-lumiere-69e1ba.netlify.app/',
    repo: 'https://github.com/Erick-Hdez/Edge-Ledger',
    icons: ` 
      <i class="devicon-html5-plain-wordmark colored"></i>
      <i class="devicon-css3-plain-wordmark colored"></i>
      <i class="devicon-jquery-plain-wordmark colored"></i>
      `,
  },
  'modal-2': {
    title: 'Guess My Number',
    img: 6,
    id: 'modal-2',
    text: 'Guess My Number is a simple game that generates random numbers between  1 to 20 where the player has to guess the randoom number and when it guessed the screen color turns to green. This game  is build on HTML, CSS and the logic with JavaScript.',
    url: 'https://jolly-shaw-3d7118.netlify.app/',
    repo: 'https://github.com/Erick-Hdez/Guess-my-number',
    icons: `
      <i class="devicon-html5-plain-wordmark colored"></i>
      <i class="devicon-css3-plain-wordmark colored"></i>
      <i class="devicon-javascript-plain colored"></i>
    `,
  },
  'modal-3': {
    title: 'Naré Website',
    img: 2,
    id: 'modal-3',
    text: 'It is a website that I designed for a client that sells delicious walnut and apple tarts in the city of Chihuahua Mexico. The web site is fully responsive and is built on HTML, CSS and JQuery.',
    url: 'https://dreamy-rosalind-7facea.netlify.app/',
    repo: 'https://github.com/Erick-Hdez/Nare',
    icons: `
      <i class="devicon-html5-plain-wordmark colored"></i>
      <i class="devicon-css3-plain-wordmark colored"></i>
      <i class="devicon-jquery-plain-wordmark colored"></i>
      `,
    // <i class="devicon-javascript-plain colored"></i>
  },
  'modal-4': {
    title: 'News Website',
    img: 3,
    id: 'modal-4',
    text: 'It is a static website  template  build with grid CSS and HTML ready to adapt as a News Website or personal blog.',
    url: 'https://stoic-curie-a04cae.netlify.app/',
    repo: 'https://github.com/Erick-Hdez/NewsGrid',
    icons: `
      <i class="devicon-html5-plain-wordmark colored"></i>
      <i class="devicon-css3-plain-wordmark colored"></i>
    `,
  },
  'modal-5': {
    title: 'My Portfolio Website',
    img: 5,
    id: 'modal-5',
    text: 'It is my personalized web, built on HTML, Sass, Javascript and JQuery.  This project is fully responsive and have a background stars with parallax effect animation impemented with sass functions and css keyframes, also have a JavaScript functionality to handle a type writting effect at the hero page,  animated knowledge time line with SVG icons  and a pop window that shows different information referent to any of my porjects.',
    url: '#home',
    repo: 'https://github.com/Erick-Hdez/Portafolio',
    icons: `
      <i class="devicon-html5-plain-wordmark colored"></i>
      <i class="devicon-sass-original colored"></i>
      <i class="devicon-jquery-plain-wordmark colored"></i>
      <i class="devicon-javascript-plain colored"></i>
    `,
  },
  'modal-6': {
    title: 'Space Dice Game',
    img: 7,
    id: 'modal-6',
    text: `It is a game that shows a random dice on the screen, it is based on two simple rules.
        1. If the value of the dice is 1, the player loses his turn,
        2. The first player to score 100 points wins the game.
       This game is made with HTML Sass and Javascript.`,
    url: 'https://laughing-noether-509132.netlify.app/',
    repo: 'https://github.com/Erick-Hdez/Roll-dice',
    icons: `
      <i class="devicon-html5-plain-wordmark colored"></i>
      <i class="devicon-sass-original colored"></i>
      <i class="devicon-javascript-plain colored"></i>
      `,
  },
  'modal-7': {
    title: 'Professional Portoflio',
    img: 4,
    id: 'modal-7',
    text: 'Professional portfolio web template fully responsive made with HTML Sass and JavasCript"',
    url: 'https://wizardly-nobel-d3f330.netlify.app/',
    repo: 'https://github.com/Erick-Hdez/portfolio_website',
    icons: `
      <i class="devicon-html5-plain-wordmark colored"></i>
      <i class="devicon-sass-original colored"></i>
      <i class="devicon-jquery-plain-wordmark colored"></i>
      <i class="devicon-javascript-plain colored"></i>
    `,
  },

  showModalInfo(str) {
    const mod = this[str];

    // <button class="close-modal">&times;</button>
    const HTMLString = `
    <div class="flex-align">
        <div class="img-mookup">
        <img src="img/${mod.img}.png" alt="Mookup" class="mookup" />
        ${mod.icons}
        <img/>
        </div>
        <div class="web-info">
          <h2 class="secction-title">${mod.title}</h2>
          <div class="bottom-line"></div>
          <p>
            ${mod.text}
          </p>
        </div>
      </div>
      <a
        class="btn-dark"
        href="${mod.url}"
        target="_blank"
        >Go Live <i class="fas fa-desktop"></i
      ></a>
      <br />
      <a
        class="btn-dark"
        href="${mod.repo}"
        target="_blank"
        >Source code <i class="fas fa-code"></i>
      </a>
    `;
    return HTMLString;
  },
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (const [key, id] of modals.btnsOpenModal.entries()) {
  // console.log(key, id);
  document.getElementById(id).addEventListener('click', () => {
    openModal();
    modal.innerHTML = modals.showModalInfo(id);
  });
}

btnCloseModal.addEventListener('click', () => {
  closeModal();
  console.log('working');
});
overlay.addEventListener('click', closeModal);

// Listener object wherever in the whole page
document.addEventListener('keydown', (event) => {
  // console.log(event);
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
