// the Dom - Document object Nodel

// the DOM is a programing interface for
// Html and XML documents

// It turns those documents into a OBJECTS!!!!!

// Vanilla JS,

// when we are using plain old havascipt to interact 
//with the DOM

// // Create an element then put it on the page
// const div = document.createElement('div');
// // next we want to put some text in the div
// div.innerText = 'All i can be is me, whoever that is';
// // we want to put the text on the body
// // 1. Grab the body
// const body = document.querySelector('body')
// // 2. then open the div we created to the body
// // so it shows on the page
// body.appendChild(div);

///////////////////////////

// jQuery - The motto of jQuery is write less, 
// Do more
// jQuery  is basically a liblary of methods to make
// dam manipulation much easier and less 

// The Basic Syntax for jQuery
// css selestor
// $('body')
// // vanila
// document.querySelector('body')
// // this is selecting the element myDiv
// $('#myDiv')
// document.querySelector
// // select all the p tags that belongs to dogClass
// $('.dogs')
// // select all the p tags that belongs to someClass
// $('p.someClass')

/////////////////////
// Changing the text inside of the div
// $('#myDiv').text('Hello World');
// // creat HTML on the fly, html method is 
// // changing the html inside of the body

// // IN ANY JQUERY METHOD WE CAN CREATE ELEMENT 
// // ON THE FLY
// $('body').html('<span>Goodbye World</span>')

///////////////////////
// saving jQuery elements we usually prepend the variable
// with a dollar sign
/// its a good idea to save variable, becasue the brower has
// to do less work,
// store variable in the body
// const $body = $('body');

// const $section = $('<section/>').text('This is the section');
// // we decided we want to add a section to the body
// // .append add the section inside the body
// $body.append($section)

////////////////////////////
// to add element to the beggning of the ul
$('<li>lab</li>').prependTo('ul');
//or this way
$('ul').prepend('<li>lab22</li>');
// to add element to the end of ul
$('ul').append('<li>shepard</li>');
/// to remove element "Golden"
/// first selectin the li with Golden, then remove it
$('li').filter(':contains("Golden")').remove();

// creating an h1
// 
const $greeting = $('<h1/>').text('To Add h1 header');
$('section').prepend($greeting);

///////////////////////////////////////////

// function to create a random rgb
const randRGB = () =>{
	return (
		Math.floor(Math.random() * 256),
		Math.floor(Math.random() * 256),
		Math.floor(Math.random() * 256)
		);
}
//// changing the background color
// $('body').css('background', 'rgb(90,96,99)');
$('body').css('background', 'lightblue');
//////////////////////////////////////////////

// Event Listerers
// Every kind of interactivity in the browser is 
// an event,
// types of events

//click
// onKeyPress
//scrolling
// mouseenter
// mouseLeave

$('#myBton').on('click', ()=>{
	//// after a click has accure, the
	//// anonymouse function here, is invoked
	//// this is a callback function

	//console.log('buttom is working');

	/// try to create an image and then append to
	/// the page, then when this clicked again removed
	// the page

	alert($('https://images-na.ssl-images-amazon.com/images/I/51Nu7%2B8NXEL.jpg'));

});
































