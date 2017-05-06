$(document).ready(function() {

  $('#tweet-controls').hide();

  $('.tweet-compose').on('click', function() {
    $(this).height('5em');
    $('#tweet-controls').show();
  });

  $('#char-count').on('keypress', function() {
    $()
  });

  function updateCouner() {

    var $text = $('.tweet-compose').val();

    var $count = $('#char-count').val();
    //$('')

    if ($text.length < 130) {
      $('#char-count').html(130 - $text.length);
    // } else if ($text.length < 11) {
    //     $('#char-count').html(11 - $text.length);
          $('#char-count').css('color', 'red');



    } else {
      $('#char-count').html(0);
      $('#.tweet-compose').val($text.substring(0, 130));
    //  $('$text').val('input:disabled')
    }
  }

  $('.tweet-compose').keyup(function() {
    updateCouner();
  });

  $('.tweet-compose').keypress(function() {
    updateCouner();
  });

  $('.tweet-compose').keydown(function() {
    updateCouner();
  });

});
