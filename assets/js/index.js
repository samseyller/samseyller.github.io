$( "#ncl1-details" ).hide(0);
$( "#ncl2-details" ).hide(0);
$( "#ncl3-details" ).hide(0);

$( "#ncl1" ).click( function() {
    $( "#ncl1-details" ).toggle();
    $( "#ncl2-details" ).hide();
    $( "#ncl3-details" ).hide();
});


$( "#ncl2" ).click( function() {
    $( "#ncl2-details" ).toggle();
    $( "#ncl1-details" ).hide();
    $( "#ncl3-details" ).hide();
});


$( "#ncl3" ).click( function() {
    $( "#ncl3-details" ).toggle();
    $( "#ncl1-details" ).hide();
    $( "#ncl2-details" ).hide();
});