/* Utiliser jQuery pour ajouter et retirer des classes sur le <div> 
lorsque tu cliques sur un bouton.*/

/*$('#toggleClass').click(() =>{
$('#content').toggleClass('red blue');
})*/


//en JS
let button = document.getElementById('toggleClass');
let div = document.getElementById('content');

button.addEventListener('click',()=>{
    if (div.classList.contains('red') && div.classList.contains('blue')){
        div.classList.remove('red');  
        div.classList.remove('blue');  
    }else {
        div.classList.add('red');
        div.classList.add('blue');
    }
});