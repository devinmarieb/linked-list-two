var bookmarkField = $('.bookmark');
var urlField = $('.url');


function addCard(bookmark, url){
  var newCard = $('.card-section').append(`<li class="new-card">${bookmark}${url}</li>`);
  

}


$('.submit-button').on('click', function(){
  debugger
  var bookmark = bookmarkField.val();
  var url = urlField.val();
  addCard(bookmark, url);
});
