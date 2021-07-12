$('form').submit(function(e){
    e.preventDefault();

    const title = $('input[type="text"]').val();
    const rating = $('input[type="number"]').val();
    
    const $title = $(`<p>${title}</p>`).css('text-decoration', 'underline');
    const $rating = $(`<p>${rating}/10</p>`);
    $('<div>')
        .addClass('movie-block')
        .append($title)
        .append($rating)
        .append('<button>X</button>')
        .appendTo('#movie-container');
})

$('#movie-container').on('click', 'button', function(){
    $(this).parent().remove();
})