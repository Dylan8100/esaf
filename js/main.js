$(function() {

	'use strict';

	// Form

	var contactForm = function() {

		if ($('#contactForm').length > 0 ) {
			$( "#contactForm" ).validate( {
				rules: {
					nombre: "required",
					telefono: "required",
					
					correo: {
						required: true,
						email: true
					},
					mensaje: {
						required: true,
						minlength: 5
					}
				},
				messages: {
					nombre: "Porfavor ingresa tu nombre",
					telefono: "Porfavor ingresa tu telefono",	
					correo: "Porfavor ingresa tu correo electronico",
					mensaje: "Escribe tu inquietud"
				},
			
				
			} );
		}
	};
	contactForm();

});