$(document).mousemove(function(event) {
  windowWidth = $(window).width();
  windowHeight = $(window).height();
  
  mouseXpercentage = Math.round(100 - (event.pageX / windowWidth * 100));
  mouseYpercentage = Math.round(100 - (event.pageY / windowHeight * 100));
  mouseXpercentageM = Math.round(event.pageX / windowWidth * 100);
  mouseYpercentageM = Math.round(event.pageY / windowHeight * 100);
  // console.log(mouseXpercentage, mouseYpercentage);
  
  $('.element').css('background-position', mouseXpercentage + '% ' + mouseYpercentage + '%');
  $('.mouse-gradient').css('background', 'radial-gradient(circle farthest-side at ' + mouseXpercentageM + '% ' + mouseYpercentageM + '%, rgba(38, 173, 166, .8), transparent)');
});