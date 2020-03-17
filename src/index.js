'use strict';

import modalsClose from './modules/modalsClose';
import popUpConsultation from './modules/popUpConsultation';
import popUpCheck from './modules/popUpCheck';
import popUpDiscount from './modules/popUpDiscount';
import popUpCall from './modules/popUpCall';
import ajax from './modules/ajax';
import toggleAccordion from './modules/accordionTwo';
import accordionCalc from './modules/accordionCalc';
import calculatePrice from './modules/calculate';

document.addEventListener('DOMContentLoaded', () => {

	let data = {};
	
	//Formation final data object 
	const consultCalc = res => {
		data.questionConsult = res;
	};

	const addCalcValues = res => {
		data.calcValues = res;
	};

	//Calculate price of calc block
	calculatePrice();

	//Modals 
	popUpCall(addCalcValues);
	popUpCheck();
	popUpDiscount();
	popUpConsultation(consultCalc);
	modalsClose();

	//Accordions functional
	toggleAccordion();
	accordionCalc();

	//Ajax post function
	ajax(data);
});
