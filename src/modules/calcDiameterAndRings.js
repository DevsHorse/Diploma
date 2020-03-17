
const calcDiameterAndRings = (selector, option) => {
  const value = selector.value.match(/^[0-9]{1}\.[0-9]{1}|[0-9]{1}/)[0];

  if (option === 'diameter' && value === '2') {
    resultPrice += (price * 0.2);
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
export default calcDiameterAndRings;