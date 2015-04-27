$(window).load(function () {
    var drawerMessage = $("#drawer_message");
    var drawerWidth;
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
        $bioInputValue = $bioInput.val();
        var setBiographyLink = webApiURL + "?biographyContent=" + $bioInputValue;
        setBiographyLink = encodeURI(setBiographyLink.toString());
        $.getJSON(setBiographyLink, null, function (data) { });
        drawerMessage.html("Updated biography");
        drawerWidth = drawerMessage.width();
        drawerWidth = drawerWidth - drawerWidth - drawerWidth;
        //alert(drawerWidth);
        drawerMessage.css({ left: drawerWidth });
        drawerMessage.addClass("drawer_transition");
        setTimeout(function () {
            drawerMessage.css({left: 0, padding: "20px" });
        }, 2000); //5 seconds
    }
});