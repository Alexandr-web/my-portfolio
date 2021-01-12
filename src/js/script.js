import AOS from 'aos';
import './calculator';
import './time';
import './card';
import './validationForm';
import './todolist';

AOS.init();

const preolader = () => {
  const preolader_block = document.querySelector('.preolader');

  window.addEventListener('DOMContentLoaded', () => preolader_block.classList.add('hidden'));
}

preolader();

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

const sayHello = () => {
    const heading = document.querySelector('.title__block-heading');
    const subheading = document.querySelector('.title__block-subheading');
    const button = document.querySelector('.title__block-button');

    let message = 'Добро пожаловать';
    let count = -1;

    message = message.split('');

    const interval = setInterval(() => {
        count++;

        if (count >= message.length - 1) {
            clearInterval(interval);

            button.classList.add('visible');
            subheading.classList.add('show-left-animation');
        }

        heading.innerText += message[count];
    }, 80);
}

sayHello();

const tabsSkills = () => {
    const items = document.querySelectorAll('.skills__list-item-desc');
    const btns = document.querySelectorAll('.skills__list-item-heading');

    const showActiveItem = (index, className) => items[index].classList.remove(className);
    const hideActiveItem = className => items.forEach(item => item.classList.add(className));

    items.forEach(item => item.classList.add('hide'));

    btns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
          hideActiveItem('hide');
          showActiveItem(index, 'hide');
        });
    });
}

tabsSkills();

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