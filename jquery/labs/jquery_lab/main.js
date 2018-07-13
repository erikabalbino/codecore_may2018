$(document).ready(function() {
    // Demo: Events with on
    console.log("HTML PARSED!");

        // ================//

    // When your mouse enters a shape, toggle the highlight class.
    $(".shape").on("mouseover", event => {
        $(event.currentTarget).toggleClass("highlight");
    });

    //When any shape is clicked do the following:
    $(".shape").on("click", function (event) {
        // If the shape has the small class, hide it.
        if ($(this).hasClass("small")) {
            $(this).hide();
        }
        // If it has the medium class, remove the medium class and add the small class.
        else if ($(this).hasClass("medium")) {
            $(this).removeClass("medium").addClass("small");
        }
        // If it has the large class, remove the large class and add the medium class.
        else if ($(this).hasClass("large")) {
            $(this).removeClass("large").addClass("medium");
        }
    });

        // ================//
        
    // Prepend a row to the table with the columns 0 and -
    let row = `<tr> 
            <td> 0 </td>
            <td> - </td>
        </tr>`;

    $("tbody").prepend(row);

    // When the form's submit button is clicked, append the text input's 
    // current value to the form message.

    $(`input[type="submit"]`).on("click", event => {

        const val = $(`input[type="text"]`).val();

        $("#form-message").append(`<p> ${val} </p>`);

    });
        
    // When Button 1 is clicked, toggle the green container.
    $("#button-1").on("click", event => {
        $("#green-container").toggle();
    });

    // When Button 2 is clicked, fade the Button Message out
    $("#button-2").on("click", event => {
        $("#button-message").fadeOut();
    });

    // When Button 3 is clicked, fade the Button Message back in.
    $("#button-3").on("click", event => {
        $("#button-message").fadeToggle();
    });
    // When Button 4 is clicked, slide the green container up.
    $("#button-4").on("click", event => {
        $("#green-container").slideUp();
    });

    // ================//
        
    // When the g key is pressed, toggle all gray shapes.

    $(document).on("keypress", event => {
        if (event.key == "g") {
            // console.log(event.key);
            $(".grey.shape").toggle();
        }
    });

    // When the spacebar key is pressed, append a small blue circle 
    // to the green container.
    $(document).on("keypress", event => {
        if (event.key == " ") {
            // console.log(event.key);
            $("#green-container").append(
                $(`<div class="small blue circle shape"></div>`)
              );
        }
    });

    // Make the Form Message show the number of characters 
    // remaining (14 characters maximum) as you type in the text input. 
    // (e.g. "3 characters remaining").


});