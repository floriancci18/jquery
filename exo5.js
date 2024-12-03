/*Utiliser jQuery pour charger du contenu à partir d'un fichier texte externe 
lorsque le bouton est cliqué.*/
// $('#loadContent').click(()=>{$('#content').load('texte.txt#content');})

// En jS
let ab= document.getElementById('loadContent')
let text;
ab.addEventListener('click', ()=>{
    text = fetch('texte.txt').then(function(reponse){
        return reponse.text();
    }).then(function(data){
        document.getElementById('content').innerText = data;
    });
})