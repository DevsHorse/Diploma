import showModal from './showModal';

const popUpConsultation = result => {
  const directorForm = document.querySelector('.director-form');
  const popUpConsultation = document.querySelector('.popup-consultation');
  const consultQuestion = document.querySelector('.consult-question');

  directorForm.addEventListener('submit', event => {
    let dataPart = consultQuestion.value;
    event.preventDefault();
    if (consultQuestion.value) {
      showModal(popUpConsultation);
    }
    return result(dataPart);
  });
};

export default popUpConsultation;