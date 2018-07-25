$(document).ready(function() {

  $('.shape').on('mouseover', event => {
    $(event.target).toggleClass('highlight');
  });

  $('.shape').on('click', function(event) {

    // if ( $(this).hasClass('small') ) {
    //   $(this).hide();
    // }

    // if ( $(this).hasClass('medium') ) {
    //   $(this)
    //     .removeClass('medium')
    //     .addClass('small');
    // }

    // if ( $(this).hasClass('large') ) {
    //   $(this)
    //     .removeClass('large')
    //     .addClass('medium');

    // }
  });

  // var row = "<tr><td>0</td><td>-</td></tr>"; // bad way
  // var row = $('<tr />').html('<td>0</td><td>-</td>'); // also bad



  var row = $('<tr />')
    .append($('<td/>').text('0'))
    .append($('<td>').text('-'));

  $('table').prepend(row);


  $('#form-1 input[type=submit]').on('click', function() {

    var text = $('#form-1 input[type=text]').val();

    $('p#form-message').append($('<br/>'));
    $('p#form-message').append(text);
  });

  $('#button-1').on('click', (event) => {
    $('#green-container').toggle();
  });

  $('#button-2').on('click', function() {
    $('#button-message').fadeOut(1000);
  });

  $('#button-3').on('click', function() {
    $('#button-message').fadeIn();
  });

  $('#button-4').on('click', (event) => {
    $('#green-container').slideUp(10000);
  });



  $(document).on('keypress', (event) => {
    if (event.key == "g") {
      $('.grey.shape').toggle();
    }

    if (event.key == " ") {
      var circle = $('<div />').addClass('small blue circle');
      $('#green-container').append(circle);
    }
  });








  // $('#form-1 input[type=text]').on('keyup', event => {
  //   var text = $('#form-1 input[type=text]').val();
  //   // var text = $(event.target).val()
  //   var remaining = 14 - text.length;


  //   if (remaining <= 0) {
  //     $('#form-1 input[type=text]').val(text.substring(0, 14));
  //     remaining = 0;
  //   }


  //   var message = remaining + " characters remaining";
  //   $('#form-message').text(message);
  // });





  $('#form-1').on('submit', event => {
    const COLORS = ['blue', 'grey', 'black', 'red'];
    let text = $('#form-1 input[type=text]').val();

    if ( COLORS.indexOf(text) > -1 ) {
      // they have typed a valid colour.

      // if text = "blue"
      // $(".shape.blue")


      $(".shape." + text).remove();

    } else {
      alert("Entered colour is not valid!!!!");
    }

    $('#form-1 input[type=text]').val("");

  });


  // reverse a string
  $('#form-1 input[type=text]').on('keyup', event => {
    let text = $('#form-1 input[type=text]').val();

    //text.reverse(); // this doesn't work!


    // option 1:
    let array = text.split("");
    let reversedArray = array.reverse();
    let reversedString = reversedArray.join("");

    // option 2:
    // var reversedString = text.split("").reverse().join("");

    $('#form-message').text(reversedString);


  });

  $('#orange-container').on('click', '.red.shape', (event) => {
    // only red shapes within the orange container
    $(event.target).remove();
  });

});