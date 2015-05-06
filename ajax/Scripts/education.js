$(document).ready(function () {
    UID = $("#userId").val();
    DisplayEducation($("#userId").val());
});

function Create(x) {
    jQuery.support.cors = true;
    var EducationModel = {
        EducationId: 0,
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
    $(".education-add-link").hide();
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
                        '<div class="text-right">' +
                            '<a class="close-education-display" href="#" onClick="Create(' + x + ')">' +
                                '<span class="glyphicon glyphicon-ok"></span> Add' + 
                            '</a>' +
                        '<div>' +
                    '</div>'
                );
    $(".education-add").css({ 'margin': '5px', 'border': '1px solid grey', 'padding': '10px' });

    $(".education-display").remove();

    $(".education-add").hide();
    $(".education-add").fadeIn();
}

function CancelAddEducation(x) {
    DisplayEducation(x);
    $(".education-add").remove();
}

function DisplayEducation(x) {
    var URL = "http://" + location.host + "/api/Education?userId=" + x;
    $(".education-add-link").show();
    $.getJSON(
        URL,
        function (data) {
            var counter = 0;
            $.each(data, function (key, value) {
                $("#live_profile_wrap").append(
                    '<div id=' + counter + ' class="row education-display">' +
                    '<div>' +
                        '<a class="close-education-display" href="#">' +
                        '<span class="glyphicon glyphicon-remove" onClick="DeleteEducation(' + counter + ',' + x + ',' + value.EducationId + ')"></span>' +
                        '</a>' +
                    '<div>' +
                    '<h4 class="display-school col-lg-12">' + value.School + '</h4>' +
                    '<div class="display-level col-lg-12">' + value.EducationLevel + '</div>' +
                    '<div class="display-department col-lg-4">' + value.Department + '</div>' +
                    '<div class="display-program col-lg-8">' + value.Program + '</div>' +
                    '<div class="education-edit-link text-right">' +
                        '<a href="#" onClick="DisplayEditEducation(' + counter + ',' + x + ',' + value.EducationId + ')">' +
                            '<span class="glyphicon glyphicon-pencil"></span> Edit' +
                        '</a>' +
                    '</div>' +
                    '</div>'
                );
                
                //$(".education-display").css({ 'margin': '5px', 'border': '1px solid grey', 'padding': '10px' });
                $(".education-display").css({ 'margin': '5px', 'background': '#F5F5F5', 'padding': '10px' });
                $(".education-edit-link").css({ 'margin-top': '15px' });
                
                counter++;
            });

            $(".education-display").hide();
            $(".education-display").fadeIn();
    });
}

function DeleteEducation(counter, x, educationId) {
    var school = $('#' + counter).find('.display-school').html();
    var department = $('#' + counter).find('.display-department').html();
    var level = $('#' + counter).find('.display-level').html();
    var program = $('#' + counter).find('.display-program').html();

    var EducationModel = {
        EducationId: educationId,
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
            $('#' + counter).fadeOut();
        }
    });
}

function DisplayEditEducation(counter, x, educationId) {
    $(".education-add-link").hide();
    var school = $('#' + counter).find('.display-school').html();
    var department = $('#' + counter).find('.display-department').html();
    var level = $('#' + counter).find('.display-level').html();
    var program = $('#' + counter).find('.display-program').html();

    $("#live_profile_wrap").append(
                    '<div class="row education-edit form-group">' +
                        '<div>' +
                            '<a class="close-education-display" href="#">' +
                            '<span class="glyphicon glyphicon-remove" onClick="CancelEditEducation(' + x + ')"></span>' +
                            '</a>' +
                        '<div>' +
                        '<label>School</label>' + '<input class="school form-control" value="' + school + '">' +
                        '<label>Education Level</label>' + '<input class="level form-control" value="' + level + '">' +
                        '<label>Department</label>' + '<input class="department form-control" value="' + department + '">' +
                        '<label>Program</label>' + '<input class="program form-control" value="' + program + '">' +
                        '<div class="text-right">' +
                            '<a class="close-education-display" href="#"  onClick="EditEducation(' + x + ',' + educationId + ')">' +
                            '<span class="glyphicon glyphicon-ok"></span> Save' +
                            '</a>' +
                        '<div>' +
                    '</div>'
                );
    $(".education-edit").css({ 'margin': '5px', 'border': '1px solid grey', 'padding': '10px' });

    $(".education-display").remove();

    $(".education-edit").hide();
    $(".education-edit").fadeIn();
}

function EditEducation(x, educationId) {
    var URL = "http://" + location.host + "/api/Education/";
    var EducationModel = {
        EducationId: educationId,
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
            DisplayEducation(x);
        }
    });
}

function CancelEditEducation(x) {
    DisplayEducation(x);
    $(".education-edit").remove();
}