import showModal from './showModal';

const popUpDiscount = ()=> {
  const sentence = document.querySelector('.sentence');
  const popUpDiscount = document.querySelector('.popup-discount');
  sentence.addEventListener('click', event => {
    const target = event.target;

    if (target.classList.contains('discount-btn')) {
      showModal(popUpDiscount);
    }
  });
};

export default popUpDiscount;