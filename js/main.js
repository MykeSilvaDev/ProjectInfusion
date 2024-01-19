(function(){
	var $body = document.querySelector('body');
	$body.classList.remove('no-js')
	$body.classList.add('js')

/*AQUI ESTOU CONFIGURANDO O MEU BOTÃO
	VARIÁVEL RESPONSÁVEL POR CONTROLAR O MENU*/
	var menu = new Menu({
		container:'.header__nav',
		toggleBtn:'.header__btnMenu',
		widthEnabled: 1024
	})

	/*VARIÁVEL RESPONSÁVEL POR CRIAR O CAROUSEL (IMAGENS NO LAPTOP)*/
	 var carouselImgs = new Carousel({
	 	container: '.laptop-slider .slideshow',
	 	itens: 'figure',
	 	btnPrev: '.prev',
	 	btnNext: '.next'
	 })

	 var carouselQuotes = new Carousel({
	 	container: '.quote-slideshow',
	 	itens: 'figure',
	 	btnPrev: '.prev',
	 	btnNext: '.next'
	 })

})()