$(function(){
	
  //Setup fluidvids	
  fluidvids.init({
  	selector: ['iframe', 'object'], // runs querySelectorAll()
  	players: ['www.youtube.com', 'player.vimeo.com'] // players to support
  });

  //On load animations 
  $('h1').delay(150).animate({ opacity: 1 }, 1000)
  $('.intro-wrapper, .author-details').delay(1500).animate({ opacity: 1 }, 1200)
  $('.partner h3, .partner img').delay(2600).animate({ opacity: 1 }, 1000)
  $('.stage-image').delay(3200).animate({ opacity: 1, marginTop: '10px' }, 1000)

});	

