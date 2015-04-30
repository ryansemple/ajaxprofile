function create() {
    jQuery.support.cors = true;
    var EducationModel = {
        UserId: 1,
        School: "BCIT",
        EducationLevel: "Certificate",
        Department: "HTP",
        Program: "SSDP"
    };

    var apiURLStart = "http://" + location.host + "/api/Biographer/";
    var cr = JSON.stringify(EducationModel);
    $.ajax({
        url: apiURLStart,
        type: 'POST',
        data: JSON.stringify(EducationModel),
        contentType: "application/json;charset=utf-8",
        success: function (data) {

        }
    });
}