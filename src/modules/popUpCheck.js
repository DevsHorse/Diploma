import showModal from './showModal';

const popUpCheck = () => {
  const popUpCheck = document.querySelector('.popup-check');
  const checkBtn = document.querySelector('.check-btn');
  checkBtn.addEventListener('click', event => {
    showModal(popUpCheck);
  });
};

export default popUpCheck;