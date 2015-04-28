$(window).load(function () {
    /*GLOBAL*/
    function _id(id) {
        return $(document.getElementById(id));
    }
    var drawer = _id("drawer_message");
    var drawerMessage = drawer.find("p");
    var drawerWidth;
    var apiURLStart = "http://" + location.host + "/api/";
    var timer;
    function startCount(method) {
        timer = setTimeout(method, 3000);
    }
    /*GLOBAL*/
    /*BIO*/
    $bioInput = _id("biography_input");
    function setBio() {
        var $bioInputValue = $bioInput.val();
        var bioApiURL = apiURLStart + "Biographer/";
        var setBiographyLink = bioApiURL + "?biographyContent=" + $bioInputValue;
        setBiographyLink = encodeURI(setBiographyLink.toString());

        $.getJSON(setBiographyLink, null)
        .done(function (data) {
            drawerMessage.html("Updated biography");
            drawerWidth = drawer.width();
            drawerWidth = drawerWidth - drawerWidth - drawerWidth - 40; //40 is padding
            drawer.css({ left: drawerWidth });
            drawer.css({ left: 0, padding: "20px" });
            setTimeout(function () {
                drawer.css({ left: drawerWidth });
            }, 5000);
            var getBiographyLink = bioApiURL;
            $.getJSON(getBiographyLink, null, function (data) {
                var biogaphyContent = _id("biography_content");
                biogaphyContent.html(data);
            });
        })
        .fail(function (error) {
            alert(error);
        });
        //$.getJSON(setBiographyLink, null, function (data) {

        //});
        //drawerMessage.html("Updated biography");
        //drawerWidth = drawerMessage.width();
        //drawerWidth = drawerWidth - drawerWidth - drawerWidth - 40; //40 is padding
        //drawerMessage.css({ left: drawerWidth });
        //drawerMessage.css({ left: 0, padding: "20px" });
        //setTimeout(function () {
        //    drawerMessage.css({ left: drawerWidth });
        //}, 5000);
    }
    $bioInput.on('input', function () {
        clearTimeout(timer);
        startCount(setBio);
    });
    /*BIO*/
});