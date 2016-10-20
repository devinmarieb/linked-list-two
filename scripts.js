var bookmarkField = $('.bookmark');
var urlField = $('.url');

function addCard(bookmark, url){
  var newCard = $('.card-section').prepend(
    `<li class="new-card">
    <p class="bookmark-name">${bookmark}</p>
    <hr class="first-hr">
    <a class="url-name" target="_blank" href=${url}>${url}</a>
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
    $('.error').css('opacity', '1');
  } else {
    addCard(bookmark, url);
    $('.error').css('opacity', '0');
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

$('.clear-read').on('click', function(){
  $('li.read').remove();
  countBookmarks();
  countReadBookmarks();
  countUnreadBookmarks();
})


//function works, but only some of the links respect the CSS properties when copied from url//
  // function isUrlValid(url) {
  //   return /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(url);
  // }

//add isUrlValid(url) to checkFields() function to run with this code added to if statement.
  //  || (isUrlValid(url) === false)
