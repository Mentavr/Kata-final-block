export const phone = () => {
  const phoneMenu = document.querySelector('.phone-menu__container');
  const phoneMenuOpenButton = document.querySelectorAll('#phone-menu__button-open-modal');
  const phoneMenuCloseButton = document.querySelector('#phone-menu__button-close-modal');
  const phoneBackgroundMenu = document.querySelector('.phone-menu');

  const burgerMenu = document.querySelector('#burger-menu');
  const burgerBackgroundMenu = document.querySelector('.burger-menu');


  Array.from(phoneMenuOpenButton).map((button) => {
    button.addEventListener('click', () => {
      console.log('click phone');
      phoneMenu.classList.remove('phone-menu__container_close');
      phoneMenu.classList.add('phone-menu__container_open');

      phoneBackgroundMenu.classList.add('phone-menu__background-menu_open');

      burgerMenu.classList.remove('burger-menu__container_open');
      burgerBackgroundMenu.classList.remove('background-menu_open');

      document.body.style.overflow = 'hidden';
      document.body.style.position = 'static';
      document.body.style.top = '';

    });
  })


  phoneMenuCloseButton.addEventListener('click', () => {
    phoneMenu.classList.remove('phone-menu__container_open');
    phoneMenu.classList.add('phone-menu__container_close');

    phoneBackgroundMenu.classList.remove('phone-menu__background-menu_open');
    phoneBackgroundMenu.classList.add('phone-menu__background-menu_close');

    document.body.style.overflow = "auto";

  });

};
