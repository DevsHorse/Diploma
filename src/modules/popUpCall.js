import showModal from './showModal';
import CaclData from './calcObject';

const popUpCall = result => {
  const popUpCall = document.querySelector('.popup-call');
  const callBtns = document.querySelectorAll('.call-btn');

  //Listening all of callBtns and if button click then show modal
  callBtns.forEach(item => {
    item.addEventListener('click', event => {
      event.preventDefault();

      //if button located at calc block then show modal and collect data values
      if (item.classList.contains('construct-btn')) {
        const distance = document.querySelector('.distance-to-home');
        if (distance.value) {
          const newData = new CaclData();
          const res = newData.init();
          showModal(popUpCall);
          result(res); // return part of data to index.js
        }
      } else {
        showModal(popUpCall);
      }
    });
  });
};

export default popUpCall;