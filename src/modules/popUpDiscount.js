import showModal from './showModal';

const popUpDiscount = ()=> {
  const sentence = document.querySelector('.sentence');
  const popUpDiscount = document.querySelector('.popup-discount');
  sentence.addEventListener('click', event => {
    const target = event.target;

    if (target.classList.contains('discount-btn')) {
      showModal(popUpDiscount);
    }
    if (target.classList.contains('add-sentence-btn')) {
      const hidden = document.querySelectorAll('.invisible-card');
      hidden.forEach(item => item.style.cssText = `display: block!important;`);
      target.style.display = 'none';
    }
  });
};

export default popUpDiscount;