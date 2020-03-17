import calcDiameterAndRings from './calcDiameterAndRings';

const calcInputs = () => {
  let price = 0;
  resultPrice = 0;

  const diameter1 = document.querySelector('.diameter');
  const diameter2 = document.querySelector('.diameter2');
  const numberOfRings1 = document.querySelector('.number-of-rings');
  const numberOfRings2 = document.querySelector('.number-of-rings2');
  const checkboxType = document.querySelector('.checkbox-type');
  const checkboxThree = document.querySelector('.checkbox-three');


  //Calculate price depending of the diameters and rings values

  if (checkboxType.hasAttribute('checked')) {
    price = 10000;
    resultPrice = price;
    calcDiameterAndRings(diameter1, 'diameter');
    calcDiameterAndRings(numberOfRings1, 'rings');
  } else {
    price = 15000;
    resultPrice = price;
    calcDiameterAndRings(diameter1, 'diameter');
    calcDiameterAndRings(numberOfRings1, 'rings');
    calcDiameterAndRings(diameter2, 'diameter');
    calcDiameterAndRings(numberOfRings2, 'rings');
  }

  if (checkboxThree.hasAttribute('checked')) {
    if (price === 10000) {
      resultPrice += 1000;
    } else {
      resultPrice += 2000;
    }
  } 
};

export default calcInputs;