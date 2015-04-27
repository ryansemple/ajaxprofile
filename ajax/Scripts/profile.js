$(window).load(function () {
    $bioFlag = false;
    var webApiURL = "http://" + location.host + "/api/API/";
    $bioInput = $("#biography_input");
    var timer;
    $bioInput.on('input', function () {
        clearTimeout(timer);
        startCount();
    });
    function startCount() {
        timer = setTimeout(setBio, 3000);
    }
    function setBio() {
        alert("writing to db");
        $bioInputValue = $bioInput.val();
        var setBiographyLink = webApiURL + "?biographyContent=" + $bioInputValue;
        setBiographyLink = encodeURI(setBiographyLink.toString());
        $.getJSON(setBiographyLink, null, function (data) { });
    }
});