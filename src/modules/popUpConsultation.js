import showModal from './showModal';
import Validate from './validate';

const popUpConsultation = result => {
  const directorForm = document.querySelector('.director-form');
  const popUpConsultation = document.querySelector('.popup-consultation');
  const consultQuestion = document.querySelector('.consult-question');


  directorForm.addEventListener('submit', event => {
    let dataPart = consultQuestion.value;
    event.preventDefault();
    const isValid = new Validate(directorForm);
  
    if (consultQuestion.value && isValid.init() === true) {
      showModal(popUpConsultation);
    }
    return result(dataPart);
  });
};

export default popUpConsultation;