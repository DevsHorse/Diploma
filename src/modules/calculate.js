import calcInputs from './calcInputs';
import checkboxChange from './checkboxChange';

const calculatePrice = () => {
  const calcResult = document.getElementById('calc-result');
  const accordionBlock = document.querySelector('.panel-group');

  let resultPrice = 0;
  
  //Animation result display
  let count = 0;
  let animateId;
  const animateResult = () => {
    animateId = requestAnimationFrame(animateResult);
    count += 500;
    if (count >= resultPrice) {
      calcResult.value = resultPrice;
      cancelAnimationFrame(animateId);
    }
    calcResult.value = count;
  };

  //Deligate calc block
  accordionBlock.addEventListener('click', event => {
    calcInputs();
    animateId = requestAnimationFrame(animateResult);
    count = 0;
  });

  //Listening checkboxes changes
  checkboxChange();
};

export default calculatePrice;