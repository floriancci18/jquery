/* Utilise jQuery pour afficher ou masquer les <div> 
lorsque des boutons spécifiques sont cliqués.*/

$('#show').click(()=>{
    $('#box1').show();
    $('#box2').show();
});

$('#hide').click(()=>{
    $('#box1').hide();
    $('#box2').hide();
});

//