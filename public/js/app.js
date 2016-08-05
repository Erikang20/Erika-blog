$( document ).ready( function ( parallax ) {

    $( window ).trigger( 'scroll' );
    $( '.parallax-window' ).parallax( {

        // naturalWidth = 600
        // naturalHeight = 100
    } );
    console.log( "it works" );
} );
