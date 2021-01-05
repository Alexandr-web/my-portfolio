const calculator = () => {
    const list = document.querySelector('.works__list-item-calc-list');
    const values = [{
            view: '+',
            className: 'plus'
        },
        {
            view: '-',
            className: 'minus'
        },
        {
            view: '×',
            className: 'umnzh'
        },
        {
            view: '÷',
            className: 'del'
        },
        {
            view: '=',
            className: 'equally'
        },
        {
            view: 'c',
            className: 'delete'
        },
        {
            view: '(',
            className: 'open_parenthesis'
        },
        {
            view: ')',
            className: 'close_parenthesis'
        },
        {
            view: '.',
            className: 'dot'
        },
        {
            view: '9',
            className: 'nine num'
        },
        {
            view: '8',
            className: 'eight num'
        },
        {
            view: '7',
            className: 'seven num'
        },
        {
            view: '6',
            className: 'six num'
        },
        {
            view: '5',
            className: 'five num'
        },
        {
            view: '4',
            className: 'four num'
        },
        {
            view: '3',
            className: 'three num'
        },
        {
            view: '2',
            className: 'two num'
        },
        {
            view: '1',
            className: 'one num'
        },
        {
            view: '0',
            className: 'zero num'
        },
    ];

    const createBlocks = () => {
        values.map(item => {
            const block = `<li class="works__list-item-calc-list-item ${item.className ? item.className : ''}">${item.view}</li>`;

            list.innerHTML += block;
        });
    }

    createBlocks();

    const addition = () => {
        const items = document.querySelectorAll('.works__list-item-calc-list-item');
        const display = document.querySelector('.works__list-item-calc-display');

        items.forEach(item => {
            item.addEventListener('click', async() => {
                const val = item.innerText.toLowerCase();

                if (display.innerText.length < 18 && val !== '=' && val !== 'c') {
                    if (display.innerText === 'NaN') {
                        display.innerText = '';
                        display.innerText += val;
                    } else {
                        display.innerText += val;
                    }
                }

                if (val === 'c') {
                    display.innerText = '';
                }

                if (val === '=') {
                    const expression = display
                        .innerText
                        .replace(/\×/g, '*')
                        .replace(/\÷/g, '/');

                    try {
                        display.innerText = eval(expression);
                    } catch (err) {
                        display.innerText = 'NaN';
                    }
                }
            });
        });
    }

    addition();
}

calculator();