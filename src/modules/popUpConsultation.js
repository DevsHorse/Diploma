import showModal from './showModal';
import Validate from './validate';

const popUpConsultation = result => {
  const directorForm = document.querySelector('.director-form');
  const popUpConsultation = document.querySelector('.popup-consultation');
  const consultQuestion = document.querySelector('.consult-question');

  const isValid = new Validate(directorForm);
  isValid.init('question');

  directorForm.addEventListener('submit', event => {
    let dataPart = consultQuestion.value;
    event.preventDefault();
  
    if (consultQuestion.value && isValid.submitValidate() === true) {
      showModal(popUpConsultation);
    }
    return result(dataPart);
  });
};

export default popUpConsultation;