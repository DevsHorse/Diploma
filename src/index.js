'use strict';

import modalsClose from './modules/modalsClose';
import popUpConsultation from './modules/popUpConsultation';
import popUpCheck from './modules/popUpCheck';
import popUpDiscount from './modules/popUpDiscount';
import popUpCall from './modules/popUpCall';
import ajax from './modules/ajax';
import toggleAccordion from './modules/accordionTwo';

document.addEventListener('DOMContentLoaded', () => {

	//data 
	let data = {};
	const dataCalc = res => {
		data.questionConsult = res;
	};

	//Modals
	popUpCall();
	popUpCheck();
	popUpDiscount();
	popUpConsultation(dataCalc);
	modalsClose();

	toggleAccordion();

	//ajax
	ajax(data);
});
