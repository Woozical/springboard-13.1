// When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
$().ready(()=>{console.log("Let's get ready to party with jQuery!")});

// Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
$('article img').addClass('image-center');

// Remove the last paragraph in the article.
$('p').eq(-1).remove();

// Set the font size of the title to be a random pixel size from 0 to 100.
$('#title').css('font-size', Math.trunc((Math.random() * 101)));

// Add an item to the list; it can say whatever you want.
$('ol').append('<li>What was I talking about?</li>');

// Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
$('aside').empty().append('<p>So sorry about the list; here\'s a nice paragraph instead!');

// When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
$('input').on('change', function(){
    const r = $('input').eq(0).val();
    const b = $('input').eq(1).val();
    const g = $('input').eq(2).val();
    $('body').css('background-color', `rgb(${r},${g},${b})`);
})


// Add an event listener so that when you click on the image, it is removed from the DOM.
$('img').click(function(){
    $(this).remove();
})