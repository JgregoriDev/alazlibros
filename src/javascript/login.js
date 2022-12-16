let buttonSubmit=document.querySelector('#login');
let inputUser=document.querySelector('#usuari');
let inputPassword=document.querySelector('#password');
buttonSubmit.addEventListener('click',(evt)=>{
    evt.preventDefault();
    console.log(inputUser.value);
    if(inputUser.value=='' || inputPassword.value==''){
        showErrors();
    }else{
        window.location.href="usuaris.html"
    }
});
function showErrors() {
    let errorContainer=document.querySelector('.errorContainer');
    errorContainer.style.color="red";
    errorContainer.textContent='Hi ha hagut un problema fent login ja que el camp usuari o contrasenya estan buits';
}