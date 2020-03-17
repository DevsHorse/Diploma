const modalsClose = () => {
  const popUp = document.querySelectorAll('.popup');

  //Deligate popUp block 
  popUp.forEach(item => item.addEventListener('click', event => {
    const inputs = item.querySelectorAll('input');
    const target = event.target;

    //If close btn or out of modal block then close modal form and reset values
    if (target.classList.contains('popup') || target.classList.contains('popup-close')) {
      if (target.classList.contains('popup-close')) {
        event.preventDefault();
      }
      
      document.body.style.overflow = 'auto';
      item.style.display = 'none';
      inputs.forEach(input => {
        input.value = '';
        input.style.borderColor = '';
        input.nextElementSibling.innerHTML = '';
      });
    }
  }));

};

export default modalsClose;