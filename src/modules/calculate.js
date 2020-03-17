const calculatePrice = result => {
  const calcResult = document.getElementById('calc-result'),
    accordionBlock = document.querySelector('.panel-group');

    let resultPrice = 0;

  const calcInputs = () => {
    let price = 0;
    resultPrice = 0;

    const diameter1 = document.querySelector('.diameter'),
    diameter2 = document.querySelector('.diameter2'),
    numberOfRings1 = document.querySelector('.number-of-rings'),
    numberOfRings2 = document.querySelector('.number-of-rings2'),
    checkboxType = document.querySelector('.checkbox-type'),
    checkboxThree = document.querySelector('.checkbox-three');

    const calcDiameterAndRings = (selector, option) => {
        const value = selector.value.match(/^[0-9]{1}\.[0-9]{1}|[0-9]{1}/)[0];

        if (option === 'diameter') {
          if (value === '2') {
            resultPrice += (price * 0.2);
          } 
        }
        if (option === 'rings') {
          if (value === '2') {
            resultPrice += (price * 0.3);
          } 
          if (value === '3') {
            resultPrice += (price * 0.5);
          }
        }
    };

    if (checkboxType.hasAttribute('checked')) {
      price = 10000;
    } else {
      price = 15000;
    }
  
    resultPrice = price;

    calcDiameterAndRings(diameter1, 'diameter');
    calcDiameterAndRings(diameter2, 'diameter');

    calcDiameterAndRings(numberOfRings1, 'rings');
    calcDiameterAndRings(numberOfRings2, 'rings');

    if (checkboxThree.hasAttribute('checked')) {
      if (price === 10000) {
        resultPrice += 1000;
      } else {
        resultPrice += 2000;
      }
    } 

    // calcResult.value = resultPrice;
  };

  accordionBlock.addEventListener('click', event => {
    calcInputs();
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
    animateId = requestAnimationFrame(animateResult);
  });


  const findParent = (elem, predicate) => {
    const traverseUp = (_elem) => {
      if (_elem.parentElement && predicate(_elem.parentElement)) {
        return _elem.parentElement;
      }
      if (_elem.tagName === 'BODY') {
        return null;
      }
      return traverseUp(_elem.parentElement);
    }
    return traverseUp(elem);
  }
  
  const toggleWrapperElement = document.querySelectorAll('.onoffswitch');
  
  toggleWrapperElement.forEach(item => item.addEventListener('click', e => {
    const targetParent = findParent(e.target, el => el.classList.contains('onoffswitch'));
  
    if (targetParent) {
      setTimeout(() => {
        const toggleCheckbox = targetParent.querySelector('.onoffswitch-checkbox');
        calcInputs();
      }, 200);
    }
  
  }));

};

export default calculatePrice;