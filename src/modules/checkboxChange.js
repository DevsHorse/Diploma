import calcInputs from './calcInputs';

const checkboxChange = () => {

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
          calcInputs();
        }, 200);
      }
    
    }));
};

export default checkboxChange;