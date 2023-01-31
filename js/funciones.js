let inf_ex_btn=document.getElementById('inf_ex_btn');
let infex=document.getElementById('infex')


inf_ex_btn.addEventListener('click',ocultar_texto)
function ocultar_texto(){
    infex.classList.toggle('show');
    if(infex.classList.contains('show')){
        inf_ex_btn.innerHTML = "Ocultar Informacion";
    }
    else{
        inf_ex_btn.innerHTML="Mas Infomracion"
    }

}