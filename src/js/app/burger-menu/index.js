export const burger = () => {
  const burgerMenu = document.querySelector('#burger-menu');
  const burgerMenuOpenButton = document.querySelector('#burger-open-button');
  const burgerMenuCloseButton = document.querySelector('#burger-close-button');
  const backgroundMenu = document.querySelector('.burger-menu');

  burgerMenuOpenButton.addEventListener('click', () => {
    console.log('click burger')
    burgerMenu.classList.remove('burger-menu__container_close');
    burgerMenu.classList.add('burger-menu__container_open');

    backgroundMenu.classList.add('background-menu_open');

    setTimeout(() => {
      document.body.style.position = 'fixed';
      document.body.style.top = `-${window.scrollY}px`;
    }, 300)

    window.scrollTo(0, 0);
  });

  burgerMenuCloseButton.addEventListener('click', () => {
    burgerMenu.classList.remove('burger-menu__container_open');
    burgerMenu.classList.add('burger-menu__container_close');

    backgroundMenu.classList.remove('background-menu_open');
    backgroundMenu.classList.add('background-menu_close');

    document.body.style.position = 'static';
    document.body.style.top = '';
  });
};
