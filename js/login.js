const login = 'demo@demo.com';
const password = 'demo';


$(function() {
	// Handler for .ready() called.

	$('.section-login__form').submit(function(event){

		const userLogin = $(this).find('input[type=email]').val();
		const userPassword = $(this).find('input[type=password]').val();

		if ((userLogin !== login) || (userPassword !== password)) {
			event.preventDefault();
			$(this).find('.alert').addClass('show');
		}

	});

});