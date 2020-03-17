/** 
* @param { patterns, cssPatterns } customization_behavior_of_different_elements
*/
class Validate {
  constructor(form) {
    this.form = form;
    this.inputs = this.form.querySelectorAll('input');
    this.patterns = [
      ["name", /^[а-яА-ЯёЁ]*$/, 'Ввод только "киррилица"' ],
      ["phone", /^\+?\d*$/, 'Ввод только "+" и "цифры"' ],
      ["question", /^[а-яА-ЯёЁ0-9\?-\s]*$/, 'Ввод только "киррилица"' ]
    ];
    this.cssPatterns = {

      default: `height: 20px;
      font-size: 16px;
      color: red;
      margin: -10px 0 5px;`,

      question: `position: absolute;
      font-size: 20px;
      font-weight: 700;
      color: #ff0f15;
      text-shadow: 0 0 10px #fff;
      margin: -75px 10px 15px;`
    };
  }
  init(option) {

  /** @param {option} option_for_style_pattern */

    //Create and adding <div> element after inputs and listening event 'input'
    this.inputs.forEach(input => {
      const div = document.createElement('div');

      if (option === 'question') {
        div.style.cssText = this.cssPatterns.question
      } else {
        div.style.cssText = this.cssPatterns.default;
      }

      input.insertAdjacentElement('afterend', div);

      input.addEventListener('input', () => {

        //Check, is "valid" input or not
        const isValid = this.checkInput(input);

        //Set message if {isValid} === false \ if "true" - reset message text
        this.message(div, input, isValid);
      });
    });
  }
  checkInput(input) {
    let isValid = false;

    //Looking for needed pattern and test that pattern on input value
    this.patterns.forEach(pattern => {
      if (pattern[0] === input.id.match(/^[a-z]*/g)[0]) {
        isValid = pattern[1].test(input.value);
      }
    });
    return isValid;
  }
  message(div, input, isValid) {
    if (isValid === false) {

      //That is the same as checkInputs() patterns mechanism
      this.patterns.forEach(pattern => {
        if (pattern[0] === input.id.match(/^[a-z]*/g)[0]) {
          div.innerHTML = pattern[2];
        }
      });
      input.style.borderColor = 'red';
    } else {
      div.innerHTML = '';
      input.style.borderColor = '';
    }
  }
  submitValidate() {

    // This is a separate method of class, for submit event (In particular for "non server submit forms")

    let notValid = 0;
    this.inputs.forEach(input => {
      if (input.nextElementSibling.textContent !== '') {
        notValid++;
      }
    });
    if (notValid > 0) {
      return false;
    }
    return true;
  }
}

export default Validate;