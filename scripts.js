var bookmarkField = $('.bookmark');
var urlField = $('.url');

function addCard(bookmark, url){
  var newCard = $('.card-section').append(
    `<li class="new-card">
    <p class="bookmark-name">${bookmark}</p>
    <hr class="first-hr">
    <a class="url-name" href=${url}>${url}</a>
    <hr class="second-hr">
    <section class="button-section">
    <button class="read-button" type="button" name="read">Read</button>
    <button class="delete-button" type="button" name="delete">Delete</button>
    </section>
    </li>`
  );
}

function countBookmarks(){
  var counter = $('li').length;
  $('.total-bookmarks').text('Total Bookmarks: ' + counter);
}

function countReadBookmarks(){
  var readCounter = $('li.read').length;
  $('.read-bookmarks').text('Read Bookmarks: ' + readCounter);
}

function countUnreadBookmarks(){
  var unreadCounter = $('li').length - $('li.read').length;
  $('.unread-bookmarks').text('Unread Bookmarks: ' + unreadCounter);
}

function checkFields(bookmark, url){
  if(bookmark === '' || url === ''){
    $('.submit-button').disabled = true;
    $('.error').text('¡ Please enter a title and URL !');
  } else {
    addCard(bookmark, url);
  }
}

function clearFields(){
  bookmarkField.val('');
  urlField.val('');
}

$('.submit-button').on('click', function(){
  var bookmark = bookmarkField.val();
  var url = urlField.val();
  checkFields(bookmark, url);
  clearFields(bookmark, url);
  countBookmarks();
  countUnreadBookmarks();
})

$('ul').on('click', '.read-button', function(){
  $(this).closest('li').toggleClass('read');
  $(this).closest('button').toggleClass('read');
  countReadBookmarks();
  countUnreadBookmarks();
})

$('ul').on('click', '.delete-button', function(){
  $(this).closest('li').remove();
  countBookmarks();
  countReadBookmarks();
  countUnreadBookmarks();
})
