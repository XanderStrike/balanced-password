left_hand = '12345qwertasdfgzxcvbQWERTASDFGZXCVB';
right_hand = '67890yuiophjklnmYUIOPHJKLNM';

function sample(str) {
  return str.charAt(Math.floor(Math.random() * str.length))
}

function generate(len) {
  var pass = '';
  for (var i=0; i < len; i = i + 2) {
    pass = pass + sample(left_hand) + sample(right_hand)
  }
  return pass;
}

$('.js-generate').on('click', function(e) {
  var length = parseInt($('.js-length').val()),
      pass = generate(length);

  console.log($('.js-length').val());

  $('.js-result').html(pass);
});
