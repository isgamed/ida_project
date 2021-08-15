'use strict';


document.addEventListener('DOMContentLoaded', () => {
	
	document.querySelectorAll('.work-field__item').forEach((item, i) => {
		item.addEventListener('mouseover', () => {
			item.querySelector('.delete').style.display = 'block';
		});
		item.addEventListener('mouseout', () => {
			item.querySelector('.delete').style.display = 'none';
		});
	});
	
		
	document.querySelectorAll('.delete').forEach((btn, i) => {
		btn.addEventListener('click', () => {
			btn.parentElement.remove();
		});
	});
});