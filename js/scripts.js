function newItem(){

  //Add a new item to the list of items:
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    let list = $('#list');
    list.append(li);
  }

  //Cross out an item from the list
  function crossOut() {
    li.toggleClass('strike');
  }

  li.on('dblclick', function crossOut() {
    li.toggleClass('strike');
  });

  //Add a delete button to the list items
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  crossOutButton.on('click', deleteListItem);
    function deleteListItem(){
      li.addClass('delete')
  }

  //Make list sortable
  $('#list').sortable();

  //clear field after submit
  $('form').trigger('reset');
}
