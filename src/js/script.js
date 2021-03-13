import AOS from 'aos';
import './calculator';
import './validationForm';
import './todolist';

AOS.init();

const scrollTo = (selectorBtn, selectorSection) => {
  const btn = document.querySelector(selectorBtn);
  const section = document.querySelector(selectorSection);

  btn.addEventListener('click', () => {
    section.scrollIntoView({ block: 'start', behavior: 'smooth' });
  });
}

scrollTo('.title__block-button', '.skills');
scrollTo('.btn-arrow-up', 'body');

const hidePreloader = () => {
  const preloader = document.querySelector('.preloader');
  const circle = document.querySelector('.preloader__circle');
  const line = document.querySelector('.preloader__line');

  window.addEventListener('load', () => {
    circle.classList.remove('anim-circle');
    circle.classList.add('end-anim-circle');

    line.classList.add('anim-line');

    setTimeout(() => {
      preloader.classList.add('hidden');
    }, 1800);
  });
}

hidePreloader();

const switchingGradientsOnHomePage = selectorGradients => {
  let count = 0;

  const gradients = document.querySelectorAll(selectorGradients);
  const ms = 3500;

  const showActiveEl = num => gradients[num].classList.add('show');
  const hideActiveEl = () => gradients.forEach(item => item.classList.remove('show'));

  showActiveEl(count);

  setInterval(() => {
    count++;

    checkCount();
    hideActiveEl();
    showActiveEl(count);
  }, ms);

  function checkCount() {
    if (count > gradients.length - 1) {
      count = 0;
    }
  }
}

switchingGradientsOnHomePage('.title__gradient');
switchingGradientsOnHomePage('.contacts__gradient');

const posLine = () => {
    const line = document.querySelector('.header__nav-line');
    const items = document.querySelectorAll('.header__nav-list-item');

    const showActiveClass = (array, index, className) => array[index].classList.add(className);
    const hideActiveClass = (array, className) => array.forEach(item => item.classList.remove(className));

    line.style.left = `${items[0].left}px`;
    line.style.width = `${items[0].offsetWidth}px`;

    showActiveClass(items, 0, 'active-link');

    items.forEach((item, index) => {
        item.addEventListener('mouseenter', () => {
            const left = item.offsetLeft;
            const width = item.offsetWidth;

            line.style.left = `${left}px`;
            line.style.width = `${width}px`;
        });

        item.addEventListener('click', () => {
            const left = item.offsetLeft;
            const width = item.offsetWidth;

            hideActiveClass(items, 'active-link');
            showActiveClass(items, index, 'active-link');

            line.style.left = `${left}px`;
            line.style.width = `${width}px`;
        });

        item.addEventListener('mouseleave', () => {
            const left = document.querySelector('.active-link').offsetLeft;
            const width = document.querySelector('.active-link').offsetWidth;

            line.style.left = `${left}px`;
            line.style.width = `${width}px`;
        });
    });
}

posLine();

const showButtonUp = () => {
    const btn = document.querySelector('.btn-arrow-up');

    window.addEventListener('scroll', () => {
        if (pageYOffset >= 650) {
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
        }
    });
}

showButtonUp();

const showMenu = () => {
    const btn = document.querySelector('.header__btn-open-list');
    const menu = document.querySelector('.header__nav');
    const lines = document.querySelectorAll('.header__btn-open-list span');
    const page = document.documentElement;

    let open = false;

    btn.addEventListener('click', () => {
        menu.classList.toggle('show-left');
        page.classList.toggle('overflow-hidden');

        open = !open;

        rotateLines();
    });

    function rotateLines() {
        if (open) {
            lines[1].classList.add('hidden');

            lines[0].style.transform = 'rotateZ(45deg)';
            lines[2].style.transform = 'rotateZ(-45deg)';
            lines[2].style.top = '8px';
            lines[0].style.bottom = '8px';
        } else {
            lines[1].classList.remove('hidden');

            lines[0].style.transform = 'rotateZ(0deg)';
            lines[2].style.transform = 'rotateZ(0deg)';
            lines[2].style.top = '';
            lines[0].style.bottom = '';
        }
    }
}

showMenu();
