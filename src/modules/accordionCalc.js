const accordionCalc = () => {
  const calcBlock = document.querySelector('.constructor');

  calcBlock.addEventListener('click', event => {
    event.preventDefault();
    let target = event.target;
    const panelCollapse = document.querySelectorAll('.collapse1');
    const checkboxType = document.querySelector('.checkbox-type');
    const checkboxThree = document.querySelector('.checkbox-three');
    const collapseTwoTwo = document.querySelector('.collapseTwo-two');


    if (target.closest('.onoffswitch') && target.parentNode.tagName === 'LABEL') {
      target.parentNode.previousElementSibling.toggleAttribute('checked');
    }

    if (checkboxType.hasAttribute('checked')) {
      collapseTwoTwo.style.display = 'none';
    } else {
      collapseTwoTwo.style.display = 'block';
    }


    if (target.closest('.panel-heading')) {
      if (target.tagName === 'SPAN') {
        target = target.parentNode.parentNode.parentNode;
      }
      if(target.tagName === 'A') {
        target = target.parentNode.parentNode;
      }
      if (target.tagName === 'H4') {
        target = target.parentNode;
      }
  
      const collapse = target.nextElementSibling;

      panelCollapse.forEach(item => {
        if (item.id !== collapse.id) {
          item.classList.remove('show');
        }
      });
    }

    if (target.closest('.construct-btn')) {

      if (target.tagName === 'SPAN') {
        target = target.parentNode;
      }

      if (target.tagName === 'A') {
        const currentCollapse = target.parentNode.parentNode;
        currentCollapse.classList.remove('show');
      }
    }

  });
};

export default accordionCalc;
