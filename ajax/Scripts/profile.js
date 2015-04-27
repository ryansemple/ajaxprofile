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
        drawerWidth = drawerWidth - drawerWidth - drawerWidth - 40; //40 is padding
        //alert(drawerWidth);
        //drawerMessage.addClass("drawer_transition");
        drawerMessage.css({ left: drawerWidth });
        //drawerMessage.addClass("show_drawer");
        drawerMessage.css({left: 0, padding: "20px" });
        setTimeout(function () {
            drawerMessage.css({ left: drawerWidth });
        }, 5000);
        var setBiographyLink = webApiURL + "?biographyContent=" + $bioInputValue;
        $.getJSON(setBiographyLink, null, function (data) { });
    }
});