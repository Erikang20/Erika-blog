"use strict";
var express = require( 'express' );
var path = require( 'path' );
var cookieSession = require( 'cookie-session' );
var knex = require( 'knex' );
var pg = require( 'pg' );
// morgan = require( 'morgan' ),
var methodOverride = require( 'method-override' );
var bodyParser = require( 'body-parser' );
var routes = require( './routes/index' );
var app = express();


// require( 'locus' );
require( 'dotenv' ).config();


app.set( 'view engine', 'ejs' );
app.set( 'views', ( __dirname + '/views' ) );
app.use( express.static( __dirname + '/public' ) );
// app.use( morgan( 'dev' ) );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {
    extended: false
} ) );
app.use( methodOverride( '_method' ) );

app.use( '/', routes );


var port = process.env.PORT || 3000;
app.listen( port, function () {
    console.log( "Im listening yo!" );
} );

module.exports = {
    app
};
