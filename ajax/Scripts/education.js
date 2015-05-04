$(document).ready(function () {
    DisplayEducation($("#userId").val());
});

function Create(x) {
    jQuery.support.cors = true;
    console.log(x);
    //var EducationModel = {
    //    UserId: x,
    //    School: "BCIT",
    //    EducationLevel: "Certificate",
    //    Department: "HTP",
    //    Program: "SSDP"
    //};

    var EducationModel = {
        UserId: x,
        School: $(".add-school").val(),
        EducationLevel: $(".add-level").val(),
        Department: $(".add-department").val(),
        Program: $(".add-program").val()
    };

    var apiURLStart = "http://" + location.host + "/api/Education/";
    $.ajax({
        url: apiURLStart,
        type: 'POST',
        data: JSON.stringify(EducationModel),
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            DisplayEducation(x);
            $(".education-add").remove();
        }
    });
}

function DisplayAddEducation(x) {
    $("#live_profile_wrap").append(
                    '<div class="row education-add form-group">' +
                        '<div>' +
                            '<a class="close-education-display" href="#">' +
                            '<span class="glyphicon glyphicon-remove" onClick="CancelAddEducation(' + x + ')"></span>' +
                            '</a>' +
                        '<div>' +
                        '<label>School</label>' + '<input class="add-school form-control">' +
                        '<label>Education Level</label>' + '<input class="add-level form-control">' +
                        '<label>Department</label>' + '<input class="add-department form-control">' +
                        '<label>Program</label>' + '<input class="add-program form-control">' +
                        '<div>' +
                            '<a class="close-education-display" href="#">' +
                            '<span class="glyphicon glyphicon-ok" onClick="Create(' + x + ')"></span>' +
                            '</a>' +
                        '<div>' +
                    '</div>'
                );
    $(".education-edit").css({ 'margin': '5px', 'border': '1px solid grey', 'padding': '10px' });

    $(".education-display").remove();
}

function CancelAddEducation(x) {
    DisplayEducation(x);
    $(".education-add").remove();
}

function DisplayEducation(x) {
    var URL = "http://" + location.host + "/api/Education?userId=" + x;
    $.getJSON(
        URL,
        function (data) {
            var counter = 0;
            $.each(data, function (key, value) {
                $("#live_profile_wrap").append(
                    '<div id=' + counter + ' class="row education-display">' +
                    '<div>' +
                        '<a class="close-education-display" href="#">' +
                        '<span class="glyphicon glyphicon-remove" onClick="DeleteEducation(' + counter + ',' + x + ')"></span>' +
                        '</a>' +
                    '<div>' +
                    '<h4 class="display-school col-lg-12">' + value.School + '</h4>' +
                    '<div class="display-level col-lg-12">' + value.EducationLevel + '</div>' +
                    '<div class="display-department col-lg-4">' + value.Department + '</div>' +
                    '<div class="display-program col-lg-8">' + value.Program + '</div>' +
                    '<div class="education-edit-link">' +
                        '<a href="#" onClick="DisplayEditEducation()"><span class="glyphicon glyphicon-pencil"></span> Edit</a>' +
                    '</div>' +
                    '</div>'
                );
                $(".education-display").css({ 'margin': '5px', 'border': '1px solid grey', 'padding': '10px' });
                $(".education-edit-link").css({ 'margin-top': '15px' });
                counter++;
            });
    });
}

function DeleteEducation(counter, x) {
    var school = $('#' + counter).find('.display-school').html();
    var department = $('#' + counter).find('.display-department').html();
    var level = $('#' + counter).find('.display-level').html();
    var program = $('#' + counter).find('.display-program').html();

    var EducationModel = {
        UserId: x,
        School: school,
        EducationLevel: level,
        Department: department,
        Program: program
    };

    var URL = "http://" + location.host + "/api/Education/";
    $.ajax({
        url: URL,
        type: "DELETE",
        data: JSON.stringify(EducationModel),
        contentType: "application/json;charset=utf-8",
        success: function (data) {
            //alert(data);
            $(".education-display").remove();
        }
    });
}

function DisplayEditEducation(x) {

    $("#live_profile_wrap").append(
                    '<div class="row education-edit form-group">' +
                        '<div>' +
                            '<a class="close-education-display" href="#">' +
                            '<span class="glyphicon glyphicon-remove" onClick="CancelEditEducation(' + x + ')"></span>' +
                            '</a>' +
                        '<div>' +
                        '<label>School</label>' + '<input class="school form-control" value=' + $(".display-school").html() + '>' +
                        '<label>Education Level</label>' + '<input class="level form-control" value=' + $(".display-level").html() + '>' +
                        '<label>Department</label>' + '<input class="department form-control" value=' + $(".display-department").html() + '>' +
                        '<label>Program</label>' + '<input class="program form-control" value=' + $(".display-program").html() + '>' +
                        '<div>' +
                            '<a class="close-education-display" href="#">' +
                            '<span class="glyphicon glyphicon-ok" onClick="EditEducation(' + x + ')"></span>' +
                            '</a>' +
                        '<div>' +
                    '</div>'
                );
    $(".education-edit").css({ 'margin': '5px', 'border': '1px solid grey', 'padding': '10px' });

    $(".education-display").remove();
}

function EditEducation(x) {
    var URL = "http://" + location.host + "/api/Education/";
    var EducationModel = {
        UserId: x,
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

function CancelEditEducation(x) {
    DisplayEducation(x);
    $(".education-edit").remove();
}