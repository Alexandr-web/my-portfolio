import VanillaTilt from 'vanilla-tilt';

const rotateCard = () => {
    const card = document.querySelector('.works__list-item-card');

    VanillaTilt.init(card, {
        max: 25,
        speed: 400
    });
}

rotateCard();