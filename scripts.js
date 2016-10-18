var bookmarkField = $('.bookmark');
var urlField = $('.url');
var newCard = '<li class="card">${bookmark},${url}</li>';

$('.submit-button').on('click', function(){
  console.log(bookmarkField.val());
  console.log(urlField.val());
});
