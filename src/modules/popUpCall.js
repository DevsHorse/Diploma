import showModal from './showModal';
import CalcData from './calcObject';
import CaclData from './calcObject';

const popUpCall = result => {
  const popUpCall = document.querySelector('.popup-call');
  const callBtns = document.querySelectorAll('.call-btn');

  callBtns.forEach(item => {
    item.addEventListener('click', event => {
      event.preventDefault();
      if (item.classList.contains('construct-btn')) {
        const distance = document.querySelector('.distance-to-home');
        if (distance.value) {
          const newData = new CaclData();
          const res = newData.init();
          showModal(popUpCall);
          result(res);
        }
      } else {
        showModal(popUpCall);
      }
    });
  });
};

export default popUpCall;