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

	//data 
	let data = {};
	const consultCalc = res => {
		data.questionConsult = res;
	};

	const addCalcValues = res => {
		console.log(res);
		data.calcValues = res;
	};

	calculatePrice();

	//Modals
	popUpCall(addCalcValues);
	popUpCheck();
	popUpDiscount();
	popUpConsultation(consultCalc);
	modalsClose();

	toggleAccordion();
	accordionCalc();

	//ajax
	ajax(data);
});
