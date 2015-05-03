$(document).ready(function () {
    DisplayProfile();
});

function DisplayProfile() {
    var URL = "http://" + location.host + "/api/Profile";
    $.ajax({
        url: URL,
        type: "GET",
        success: function (data) {
            $("#live_profile_wrap").append(
                '<div class="row profile-display">' +
                '<div><a class="close-profile-display" href="#">' +
                '<span class="glyphicon glyphicon-remove" onClick="CloseDisplayProfile()"></span>' +
                '</a><div><div>' +
                data +
                '</div></div>'
                );
            $(".profile-display").css({ 'margin': '5px', 'border': '1px solid grey', 'padding': '10px' });
        }
    });
}

function CloseDisplayProfile() {
    $(".close-profile-display").click(function () {
        $(".profile-display").remove();
    });
}