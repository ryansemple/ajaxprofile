$(document).ready(function () {
    DisplayEducation(1);
});

function Create() {
    jQuery.support.cors = true;
    var EducationModel = {
        UserId: 1,
        School: "BCIT",
        EducationLevel: "Certificate",
        Department: "HTP",
        Program: "SSDP"
    };

    var apiURLStart = "http://" + location.host + "/api/Education/";
    $.ajax({
        url: apiURLStart,
        type: 'POST',
        data: JSON.stringify(EducationModel),
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            DisplayEducation(1);
        }
    });
}

function DisplayEducation(x) {
    var URL = "http://" + location.host + "/api/Education?userId=" + x;
    $.getJSON(
        URL,
        function(data){
            $("#live_profile_wrap").append(
                    '<div class="row education-display">' +
                    '<div><a class="close-education-display" href="#">' +
                    '<span class="glyphicon glyphicon-remove" onClick="DeleteEducation()"></span>' +
                    '</a><div><div>' +
                    '<h4>School: </h4><div class="display-school col-lg-12">' + data.School + '</div>' +
                    '<h4>Level: </h4><div class="display-level col-lg-12">' + data.EducationLevel + '</div>' +
                    '<h4>Department: </h4><div class="display-department col-lg-12">' + data.Department + '</div>' +
                    '<h4>Program: </h4><div class="display-program col-lg-12">' + data.Program + '</div>' +
                    '<div class=""><a href="#" onClick="DisplayEditEducation()">Edit</a></div>' +
                    '</div>'
                );
            $(".education-display").css({ 'margin': '5px', 'border': '1px solid grey', 'padding': '10px' });
    
    });
}

function DeleteEducation(){
    var URL = "http://" + location.host + "/api/Education?userId=1";
    $.ajax({
        url: URL,
        type: "DELETE",
        success: function (data) {
            //alert(data);
            $(".education-display").remove();
        }
    });
}

function DisplayEditEducation() {

    $("#live_profile_wrap").append(
                    '<div class="row education-edit form-group">' +
                        '<div>' +
                            '<a class="close-education-display" href="#">' +
                            '<span class="glyphicon glyphicon-remove" onClick="CancelEditEducation()"></span>' +
                            '</a>' +
                        '<div>' +
                        '<label>School: </label>' + '<input class="school form-control" value=' + $(".display-school").html() + '>' +
                        '<label>School: </label>' + '<input class="level form-control" value=' + $(".display-level").html() + '>' +
                        '<label>School: </label>' + '<input class="department form-control" value=' + $(".display-department").html() + '>' +
                        '<label>School: </label>' + '<input class="program form-control" value=' + $(".display-program").html() + '>' +
                        '<div>' +
                            '<a class="close-education-display" href="#">' +
                            '<span class="glyphicon glyphicon-ok" onClick="EditEducation()"></span>' +
                            '</a>' +
                        '<div>' +
                    '</div>'
                );
    $(".education-edit").css({ 'margin': '5px', 'border': '1px solid grey', 'padding': '10px' });

    $(".education-display").remove();
}

function EditEducation() {
    var URL = "http://" + location.host + "/api/Education/";
    var EducationModel = {
        UserId: 1,
        School: $(".school").val(),
        EducationLevel: $(".level").val(),
        Department: $(".department").val(),
        Program: $(".program").val()
    };
    $.ajax({
        url: URL,
        type: "PUT",
        data: JSON.stringify(EducationModel),
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            $(".education-edit.form-group").remove();
            DisplayEducation(1);
        }
    });
}

function CancelEditEducation() {
    DisplayEducation(1);
    $(".education-edit").remove();
}