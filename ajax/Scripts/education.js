function create() {
    jQuery.support.cors = true;
    var EducationModel = {
        School: "BCIT",
        EducationLevel: "Certificate",
        SchoolDepartment: {
            DepartmentId: 123,
            Department: "HTP",
            SchoolProgram: {
                ProgramId: 334,
                Program: "SSDP"
            }
        }
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