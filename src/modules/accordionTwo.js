const toggleAccordion = () => {
  const questionsBlock = document.querySelector('.questions');

  questionsBlock.addEventListener('click', event => {
    event.preventDefault();
    
    const target = event.target;
    const panelCollapse = document.querySelectorAll('.panel-collapse');

    if (target.closest('.panel-heading') && target.nodeName === 'A') {
      panelCollapse.forEach(item => item.classList.remove('in'));

      const collapse = target.parentNode.parentNode.nextElementSibling;
      collapse.classList.add('in');

    }
  });
};

export default toggleAccordion;