

$(function () {
    var array = GetAllUsers();
    //var availableTags = [
    //  "ActionScript",
    //  "AppleScript",
    //  "Asp",
    //  "BASIC",
    //  "C",
    //  "C++",
    //  "Clojure",
    //  "COBOL",
    //  "ColdFusion",
    //  "Erlang",
    //  "Fortran",
    //  "Groovy",
    //  "Haskell",
    //  "Java",
    //  "JavaScript",
    //  "Lisp",
    //  "Perl",
    //  "PHP",
    //  "Python",
    //  "Ruby",
    //  "Scala",
    //  "Scheme"
    //];
    $("#tags").autocomplete({
        source: array,
        select: function (event, ui) {
            if (ui.item)
            {
                alert(ui.item.value);
            }
            
        }
    });
});

function GetAllUsers()
{
    user = new Array();
    $.ajax({
        url: "http://" + location.host + "/api/Users",
        type: "GET",
        async: false,
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            $.each(data, function (key, value) {
                user.push(value.FirstName + " " + value.LastName);
                //alert(value.FirstName);
                console.log(user);
            });
        }
    });
    return user;
}