$(document).ready(function(){
  var head = function(){
    scrollTop = $(window).scrollTop();
    if(scrollTop>0){
      $('#H').addClass('shadow');
    }else{
      $('#H').removeClass('shadow');
    }
  };
  $(window).scroll(function() {
	  head();
  });
});
