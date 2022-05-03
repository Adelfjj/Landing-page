
var toggle = document.querySelector('.menu-mobile')
   .addEventListener('click',function(){
      this.classList.toggle("change");
      var nav = document.querySelector('nav').classList.toggle("slide");
});

var userLogin = document.querySelector('#login')
   .addEventListener('click',function(){

     var drop_login = document.querySelector('.drop-login');
     if(drop_login.style.display === 'block')
     drop_login.style.display = 'none';
     else{
      drop_login.style.display = 'block';
     }
     
   });