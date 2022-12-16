//Get the button:
buttonScrollTop = document.querySelector('#ButtonScrollTop');
buttonScrollTop.addEventListener('click',()=>{
    scrollToTopFunction ();
});
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    buttonScrollTop.style.display = "block";
  } else {
    buttonScrollTop.style.display = "none";
  }
}
function scrollToTopFunction() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; //Chrome, Firefox y Opera
} 
