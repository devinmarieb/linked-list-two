var bookmarkField = $('.bookmark');
var urlField = $('.url');


function addCard(bookmark, url){
  var bookmarkEntry = `<p class="bookmark-name">${bookmark}</p>`;
  var urlEntry = `<a class="url-name" href=${url}>${url}</a>`;
  var readButton = `<button class="read-button" type="button" name="read">Read</button>`;
  var deleteButton = `<button class="delete-button" type="button" name="delete">Delete</button>`;
  var newCard = $('.card-section').append(`<li class="new-card">${bookmarkEntry}${urlEntry}${readButton}${deleteButton}</li>`);
}

function checkFields(bookmark, url){
  if(bookmark === '' || url === ''){
    $('.submit-button').disabled = true;
    $('.error').text('Please enter a bookmark and url!');
  } else {
    addCard(bookmark, url);
  }
}

$('.submit-button').on('click', function(){
  var bookmark = bookmarkField.val();
  var url = urlField.val();
  checkFields(bookmark, url);
  var bookmark = bookmarkField.val('');
  var url = urlField.val('');
})

$('ul').on('click', '.read-button', function(){
  $(this).closest('li').toggleClass('read');
})

$('ul').on('click', '.delete-button', function(){
  $(this).closest('li').remove();
})
