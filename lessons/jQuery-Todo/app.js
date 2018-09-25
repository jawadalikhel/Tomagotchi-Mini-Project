//// need to find a button and make on click function on it
$('button').on('click', () =>{
	// $info any info in the input box/text
	const $info = $('input').val();
	console.log($info);

	creatTodo($info);


})

const creatTodo = (importValue) =>{
	const $div = $('<div/>').addClass('todos');

	$div.append('<h5>' + importValue + '</h5>');

	const $button = $('<button/>').on('click', moveTodoToDone);
	$button.text('Completed');

	$div.append($button);

	$('#col-1').append($div);
}

const moveTodoToDone = (event) => {
	const $currentTodo = $(event.currentTarget).parent();
	
	$('#col-2').append($currentTodo);

	$(event.currentTarget).text('Delete');

	$(event.currentTarget).off('click').on('click', removeTodo);
}

const removeTodo = (event) =>{
	
	$(event.currentTarget).parent().remove();
}