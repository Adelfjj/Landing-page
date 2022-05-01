
var toggle = document.querySelector('.menu-mobile')
   .addEventListener('click',function(){
      this.classList.toggle("change");

      
      var nav = document.querySelector('nav').classList.toggle("slide");
});