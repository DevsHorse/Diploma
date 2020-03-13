'use strict';

import modalsClose from './modules/modalsClose';
import popUpConsultation from './modules/popUpConsultation';
import popUpCheck from './modules/popUpCheck';
import popUpDiscount from './modules/popUpDiscount';
import popUpCall from './modules/popUpCall';
import ajax from './modules/ajax';

document.addEventListener('DOMContentLoaded', () => {

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
	
	ajax(data);
});
