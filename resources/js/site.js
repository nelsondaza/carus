(jQuery || $)(function(){

	(function(){
		$('#home-form').form({
			fields: {
				name: {
					identifier: 'email',
					rules: [
						{
							type   : 'email',
							prompt : 'Ingresa un e-mail válido.'
						}
					]
				},
				password: {
					identifier: 'password',
					rules: [
						{
							type   : 'minLength[4]',
							prompt : 'La clave es muy corta.'
						}
					]
				},
				terms: {
					identifier: 'terms',
					rules: [
						{
							type   : 'checked',
							prompt : 'Acepta los términos de uso.'
						}
					]
				}
			}
		});

	})();


});

/*
[{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"simplified"},{"lightness":"0"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"lightness":"0"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"lightness":"0"}]},{"featureType":"administrative","elementType":"labels","stylers":[{"lightness":"0"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"administrative.province","elementType":"labels","stylers":[{"lightness":"40"}]},{"featureType":"administrative.locality","elementType":"labels","stylers":[{"lightness":"25"}]},{"featureType":"administrative.neighborhood","elementType":"labels","stylers":[{"lightness":"40"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"lightness":"100"}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"color":"#ffffff"},{"lightness":"0"}]},{"featureType":"landscape.natural.landcover","elementType":"all","stylers":[{"lightness":"0"}]},{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"lightness":"0"}]},{"featureType":"poi.park","elementType":"all","stylers":[{"visibility":"on"},{"lightness":"27"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":"45"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"lightness":"-5"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"},{"weight":2.92},{"lightness":33}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"lightness":-16}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#afdbed"},{"lightness":35}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#454545"},{"lightness":53}]}]
	*/