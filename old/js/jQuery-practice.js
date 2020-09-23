//Script goes here
//Selecting required elements from DOM
var addButton = $('.add');
var inputa = $('input:text');
var todolistParent = $('ul');
//variable to assert visisbility of inputa
var isVisible = false;
inputa.hide();
//Handling click event of addButton
addButton.on('click', function (e) {
    if (isVisible === false) {
        inputa.slideDown(500);
        isVisible = true;
    }
    //adding values entered to the list
    //making sure values entered are not just empty strings or whitespace
    else if (inputa.val() !== "") {
        if (inputa !== " ") {
            //creating a new list item
            var newItem = $('<li class="list-group-item"></li>');
            newItem.html(`${inputa.val()}`);
            let delElt = '<a role="button" class=" btn btn-link" ><i class="fa fa-trash"></i></a>';
            newItem.append(delElt);
            delElt.addClass('delete');
            //removing default text
            $('em').parent().remove();
            //adding newItem to todo list
            $('#form').before(newItem);
            //clearing inputa value
            inputa.val("");
        } else {
            inputa.val("");
        }


    }

});
//deleting items
$('.delete').on('click', (e) => {
    e.target.parent().remove();
});
