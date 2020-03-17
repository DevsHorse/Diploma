import showModal from './showModal';

const popUpDiscount = ()=> {
  const sentence = document.querySelector('.sentence');
  const popUpDiscount = document.querySelector('.popup-discount');

  //Delegation on sentence block
  sentence.addEventListener('click', event => {
    const target = event.target;

    //If target === "show modal" then show modal
    if (target.classList.contains('discount-btn')) {
      showModal(popUpDiscount);
    }
    //If target === button "more" then show more blocks
    if (target.classList.contains('add-sentence-btn')) {
      const hidden = document.querySelectorAll('.invisible-card');
      hidden.forEach(item => item.style.cssText = `display: block!important;`);
      target.style.display = 'none';
    }
  });
};

export default popUpDiscount;