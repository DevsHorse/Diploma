const toggleAccordion = () => {
  const questionsBlock = document.querySelector('.questions');

  //Deligate question block (accordion)
  questionsBlock.addEventListener('click', event => {
    event.preventDefault();
    
    let target = event.target;
    const panelCollapse = document.querySelectorAll('.collapse2');

    //Target's redefinition
    if (target.tagName === 'A') {
      target = target.parentNode.parentNode;
    }
    if (target.tagName === 'H4') {
      target = target.parentNode;
    }
    const collapse = target.nextElementSibling;
    
    //Remove class "show" at non-target items
    if (target.closest('.panel-heading') && target.nodeName === 'DIV') {
      panelCollapse.forEach(item => {
        if (item.id !== collapse.id) {
          item.classList.remove('show');
        }
      });
    }
  });
};

export default toggleAccordion;
