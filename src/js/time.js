const time = () => {
    const block_time = document.querySelector('.works__list-item-time');
    const date = new Date();

    const hours = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`;
    const minute = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;
    const second = date.getSeconds() > 9 ? date.getSeconds() : `0${date.getSeconds()}`;

    block_time.innerHTML = `${hours}:${minute}:${second}`;
}

time();

setInterval(time, 1000);