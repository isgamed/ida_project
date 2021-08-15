'use strict';


document.addEventListener('DOMContentLoaded', () => {
	
	document.querySelectorAll('.work-field__item').forEach((item) => {
		item.addEventListener('mouseover', () => {
			item.querySelector('.delete').style.display = 'block';
		});
		item.addEventListener('mouseout', () => {
			item.querySelector('.delete').style.display = 'none';
		});
	});
	
		
	document.querySelectorAll('.delete').forEach((btn) => {
		btn.addEventListener('click', () => {
			cuteHide(btn.parentElement);
		});
	});

	function cuteHide(element) {
		element.animate({opacity: '0'}, 250);
		setTimeout( function(){
			element.remove();
			console.log(1);
		  }, 250);
	}
	
});