export const feedback = () => {
  const feedbackMenu = document.querySelector('.feedback-menu__container');
  const feedbackMenuOpenButton = document.querySelectorAll('#feedback-menu__button-open-modal');
  const feedbackMenuCloseButton = document.querySelector('#feedback-menu__button-close-modal');
  const feedbackBackgroundMenu = document.querySelector('.feedback-menu');

  const burgerMenu = document.querySelector('#burger-menu');
  const burgerBackgroundMenu = document.querySelector('.burger-menu');


  Array.from(feedbackMenuOpenButton).map((button) => {
    button.addEventListener('click', () => {

      feedbackMenu.classList.remove('feedback-menu__container_close');
      feedbackMenu.classList.add('feedback-menu__container_open');

      feedbackBackgroundMenu.classList.add('feedback-menu__background-menu_open');

      burgerMenu.classList.remove('burger-menu__container_open');
      burgerBackgroundMenu.classList.remove('background-menu_open');

      document.body.style.overflow = 'hidden';
      document.body.style.position = 'relative';
      document.body.style.top = '';

    });
  })


  window.addEventListener('click', function (e) {
    if (!feedbackMenu.contains(e.target) && feedbackBackgroundMenu.contains(e.target)) {
      feedbackMenu.classList.remove('feedback-menu__container_open');
      feedbackMenu.classList.add('feedback-menu__container_close');

      feedbackBackgroundMenu.classList.remove('feedback-menu__background-menu_open');
      feedbackBackgroundMenu.classList.add('feedback-menu__background-menu_close');

      document.body.style.overflow = "auto";
    }
  });

  feedbackMenuCloseButton.addEventListener('click', () => {
    feedbackMenu.classList.remove('feedback-menu__container_open');
    feedbackMenu.classList.add('feedback-menu__container_close');

    feedbackBackgroundMenu.classList.remove('feedback-menu__background-menu_open');
    feedbackBackgroundMenu.classList.add('feedback-menu__background-menu_close');

    document.body.style.overflow = "auto";

  });

};