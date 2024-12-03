/* Utiliser jQuery pour récupérer 
les valeurs des champs lorsque le formulaire est soumis, 
et affiche un message avec ces valeurs*/

/*$('#myForm').on('submit', function(event){
    event.preventDefault();

    let nom = $('#name').val();
    let age = $('#age').val();

    if(nom != '' && age != '') {
        $('#result').text('Nom :' + nom + ', Age : ' +age);
        } else {
            $('#result').text('Tous les champs sont obligatoires !');
        }
});*/


//JS
let form = document.getElementById('myForm');
let nom = document.getElementById('name');
let age = document.getElementById('age');
form.addEventListener('submit',(event)=> {
    event.preventDefault();
    
    if (nom.value != '' && age.value != '') {
        document.getElementById('result').innerText = nom.value + age.value;
    } else {
        document.getElementById('result').innerText = 'Tous les champs sont obligatoires !';
    }

})
