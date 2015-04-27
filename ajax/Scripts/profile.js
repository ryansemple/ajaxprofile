$(window).load(function () {
    $bioFlag = false;
    var webApiURL = "http://" + location.host + "/api/API/";
    $bioInput = $("#biography_input");
    $bioInput.on('input', function () {
        $bioInputValue = $bioInput.val();
        var setBiographyLink = webApiURL + "?biographyContent=" + $bioInputValue;
        setBiographyLink = encodeURI(setBiographyLink.toString());
        $.getJSON(setBiographyLink, null, function (data) { });
    });
});