import showModal from './showModal';

const popUpCall = () => {
  const popUpCall = document.querySelector('.popup-call');
  const callBtns = document.querySelectorAll('.call-btn');

  callBtns.forEach(item => {
    item.addEventListener('click', event => {
      event.preventDefault();
      showModal(popUpCall);
    });
  });
};

export default popUpCall;