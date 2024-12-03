// Utiliser jQuery pour animer le <div> lorsqu'un bouton est cliqué.

$('#animate').click(()=>{
    $('#box').animate({
        width: '0px',
        height: '0px'
    }, 2000, "linear", function(){
        $('#box').animate({
        width: '100px',
        height: '100px'
    }, 2000, "linear");
})});