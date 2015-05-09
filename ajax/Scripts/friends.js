$(document).ready(function () {
    GetFriendsList($("#userId").val());
});

function GetFriendsList(userId)
{
    $.ajax({
        url: "http://" + location.host + "/api/Friends?userId=" + userId,
        type: "GET",
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            $.each(data, function (key, value) {
                $("#friends_display_wrap").append("<div id='" + value.FriendId + "-friend' class='col-lg-12 col-md-12'>" + value.FirstName + " " + value.LastName + "</div>");
                $("#" + value.FriendId + "-friend").css({ 'border': '1px solid #D7CECE', 'margin': '5px', 'padding': '20px' });
            });
        }
    });
}